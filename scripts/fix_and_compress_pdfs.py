import fitz
import os
import time

def compress_pdf(input_path, output_path, quality=75):
    print(f"Compressing '{input_path}' -> '{output_path}'...")
    start_time = time.time()
    
    doc = fitz.open(input_path)
    processed_xrefs = set()
    total_images = 0
    updated_images = 0
    preserved_images = 0

    for page in doc:
        for img in page.get_images(full=True):
            total_images += 1
            xref = img[0]
            if xref in processed_xrefs:
                continue
            processed_xrefs.add(xref)
            
            try:
                obj_str = doc.xref_object(xref)
                has_smask = "/SMask" in obj_str
                pix = fitz.Pixmap(doc, xref)
                
                # IMPORTANT: If the image has transparency (alpha channel or soft mask),
                # preserve it to prevent turning transparent logo backgrounds into black boxes!
                if pix.alpha or has_smask:
                    preserved_images += 1
                    continue

                # Convert to RGB if necessary (e.g. CMYK / Indexed)
                if pix.n >= 5 or pix.colorspace.name != fitz.csRGB.name:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                
                # Convert to JPG stream
                jpg_bytes = pix.tobytes(output="jpg", jpg_quality=quality)
                
                # Using page.replace_image correctly updates the XObject dictionary:
                # Filter becomes /DCTDecode, ColorSpace becomes /DeviceRGB
                page.replace_image(xref, stream=jpg_bytes)
                updated_images += 1
            except Exception as e:
                print(f"Warning: Could not replace xref {xref}: {e}")

    # Save compressed PDF with garbage collection and stream deflation
    doc.save(output_path, garbage=4, deflate=True)
    doc.close()
    
    orig_size = os.path.getsize(input_path) / (1024 * 1024)
    new_size = os.path.getsize(output_path) / (1024 * 1024)
    elapsed = time.time() - start_time
    
    print(f"Success! Replaced {updated_images} images, preserved {preserved_images} transparent logo/overlay images.")
    print(f"Original size: {orig_size:.2f} MB")
    print(f"Compressed size: {new_size:.2f} MB ({((orig_size - new_size)/orig_size)*100:.1f}% reduction)")
    print(f"Time taken: {elapsed:.2f}s\n")

if __name__ == "__main__":
    kankas_in = r"C:\Users\korja\Downloads\Kankas House by stayra-hd.pdf"
    kankas_out = r"c:\stayra\public\kankas-house-brochure.pdf"
    brochure_out = r"c:\stayra\public\brochure.pdf"
    
    choti_in = r"C:\Users\korja\Downloads\Chotti Haveli by stayra.pdf"
    choti_out = r"c:\stayra\public\choti-haveli-brochure.pdf"
    
    if os.path.exists(kankas_in):
        compress_pdf(kankas_in, kankas_out, quality=75)
        # Duplicate to brochure.pdf fallback
        with open(kankas_out, "rb") as f_in, open(brochure_out, "wb") as f_out:
            f_out.write(f_in.read())
        print(f"Copied {kankas_out} to {brochure_out}")
        
    if os.path.exists(choti_in):
        compress_pdf(choti_in, choti_out, quality=75)
