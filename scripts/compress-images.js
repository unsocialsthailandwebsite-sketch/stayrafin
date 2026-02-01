const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIRS = [
    "C:/Users/korja/Downloads/FACADE-20260129T150821Z-3-001/FACADE",
    "C:/Users/korja/Downloads/ROOM 01-20260129T150755Z-3-001/ROOM 01",
    "C:/Users/korja/Downloads/ROOM 02-20260129T150803Z-3-001/ROOM 02",
    "C:/Users/korja/Downloads/ROOM 03-20260129T150806Z-3-001/ROOM 03",
    "C:/Users/korja/Downloads/GARDEN-20260129T150819Z-3-001/GARDEN",
    "C:/Users/korja/Downloads/HALL-20260129T150811Z-3-001/HALL"
];

async function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.warn(`Directory not found: ${dirPath}`);
        return;
    }

    const parentDir = path.dirname(dirPath);
    const dirName = path.basename(dirPath);
    const destDir = path.join(parentDir, `${dirName}_OPT`);

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
    }

    const files = fs.readdirSync(dirPath);
    console.log(`Processing ${files.length} files in ${dirName}...`);

    for (const file of files) {
        if (!/\.(jpg|jpeg|png|avif|webp)$/i.test(file)) continue;

        const srcPath = path.join(dirPath, file);
        const destPath = path.join(destDir, file.replace(/\.\w+$/, '.jpg')); // Convert to JPG

        try {
            await sharp(srcPath)
                .resize(2500, 2500, { fit: 'inside', withoutEnlargement: true }) // Max 2500px long edge
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(destPath);

            console.log(`✓ Optimized: ${file}`);
        } catch (err) {
            console.error(`✗ Failed to optimize ${file}:`, err.message);
        }
    }
}

async function run() {
    console.log("Starting image compression...");
    for (const dir of SOURCE_DIRS) {
        await processDirectory(dir);
    }
    console.log("Compression complete!");
}

run();
