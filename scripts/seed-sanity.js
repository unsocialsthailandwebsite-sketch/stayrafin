
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration from your .env.local (manually passed or hardcoded for the script)
const config = {
    projectId: '1tjvajrl',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: 'skB6TocOArlaSg2g03p00NaqFKHDaCFN0MbRmjq86YbuzHlo0kKTJgX5U52xw1GBod64EoSxH3AtUD8NlQ2JFCz9frFDEN7Z2DsRXLxSRsxeM8N0UGzEcOQsVCxH9fuvmXN1PlyokrhcIJpuaBpJFOevm9sDpygvw7kghD3qiTeFp2P7WgOC', // Write Token
    useCdn: false,
};

const client = createClient(config);

const PROPERTIES = {
    "choti-haveli": {
        title: "Choti Haveli",
        location: "C-Scheme, Jaipur",
        specs: "4 Bedrooms | Sleeps 8-10",
        price: '₹25,000 / night',
        type: 'heritage',
        images: (function () {
            const dir = "C:/Users/korja/Downloads/choti";
            try {
                return fs.readdirSync(dir)
                    .filter(file => /\.(jpg|jpeg|png|avif|webp)$/i.test(file))
                    .map(file => path.join(dir, file));
            } catch (e) {
                console.error("Could not read local directory:", e);
                return [];
            }
        })(),
        description: `Explore a timeless voyage where Rajasthan's majestic history blends seamlessly with contemporary luxuries and tranquil natural surroundings.

Situated within the Emaar Group's portfolio, reminiscent of Burj Khalifa in Dubai, this gated community offers round-the-clock security. Nestled amidst 23 acres of expansive greenery, it provides a perfect sanctuary for you and your family to cherish and indulge in nature.

The space

MASTER BEDROOM
Relax in the lap of luxury with our plush king-sized bed, draped in the finest linens to ensure a restful night's sleep. The en-suite bathroom is a sanctuary of indulgence, featuring automatic washing machine, geyser and luxurious bath amenities

KITCHEN
The kitchen is stocked with state-of-the-art appliances and the latest culinary, ideal for gourmet enthusiasts and seasoned chefs alike. Every tool is at your disposal to create culinary masterpieces with ease.Ideal to serve family & friends.

LIVING ROOM
Whether you're enjoying a leisurely afternoon tea with friends or unwinding with a cocktail in hand after a busy day, our living room is a haven of indulgence. The focal point of the living room is an indoor fountain and an indoor pond, providing a meditative atmosphere for your cozy evenings. Floor-to-ceiling traditional colorful windows and an additional washroom to ensure the utmost comfort and convenience for our guests.

PRIVATE GARDEN
where luxury meets nature in perfect harmony. At dusk, twinkling fairy lights come to life. Casting a magical glow over the haveli and the garden, creating an enchanting atmosphere for evening gatherings. Whether it's an intimate dinner under the stars or a romantic rendezvous amidst the blooms, our private garden sets the stage for unforgettable moments and cherished memories.`,
        features: ["Heritage Decor", "City Center", "Rooftop Terrace", "Traditional Breakfast", "Concierge"]
    },
    "the-kukas-villa": {
        title: "The Kukas Villa",
        location: "Khora Mina Gaon, near Kukas, Jaipur",
        specs: "3 Bedrooms | Sleeps 12-15",
        price: '₹55,000 / night',
        type: 'modern',
        gallerySections: [
            {
                title: "Room by the Garden (Ground Floor)",
                images: (function () {
                    const dir = "C:/Users/korja/Downloads/ROOM 01-20260129T150755Z-3-001/ROOM 01_OPT";
                    try { return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|avif|webp)$/i.test(f)).map(f => path.join(dir, f)); } catch (e) { return []; }
                })()
            },
            {
                title: "Aravalli View Room (First Floor)",
                images: (function () {
                    const dir = "C:/Users/korja/Downloads/ROOM 02-20260129T150803Z-3-001/ROOM 02_OPT";
                    try { return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|avif|webp)$/i.test(f)).map(f => path.join(dir, f)); } catch (e) { return []; }
                })()
            },
            {
                title: "Sunset View Room (First Floor)",
                images: (function () {
                    const dir = "C:/Users/korja/Downloads/ROOM 03-20260129T150806Z-3-001/ROOM 03_OPT";
                    try { return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|avif|webp)$/i.test(f)).map(f => path.join(dir, f)); } catch (e) { return []; }
                })()
            },
            {
                title: "Amenities & Common Areas",
                images: (function () {
                    const dirs = [
                        "C:/Users/korja/Downloads/FACADE-20260129T150821Z-3-001/FACADE_OPT",
                        "C:/Users/korja/Downloads/GARDEN-20260129T150819Z-3-001/GARDEN_OPT",
                        "C:/Users/korja/Downloads/HALL-20260129T150811Z-3-001/HALL_OPT"
                    ];
                    let allImages = [];
                    dirs.forEach(dir => {
                        try {
                            const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|avif|webp)$/i.test(f)).map(f => path.join(dir, f));
                            allImages = allImages.concat(files);
                        } catch (e) { console.error(`Error reading ${dir}:`, e.message); }
                    });
                    return allImages;
                })()
            }
        ],
        // Luxury Listing Version (Short & Premium)
        description: `The Kukas Villa is a private luxury retreat nestled in the Aravalli hills near Kukas, Jaipur. Surrounded by scenic landscapes and open greenery, this two-floor villa offers three air-conditioned bedrooms with attached washrooms, a private 5-ft swimming pool, a fully equipped kitchen, and a personal caretaker.

The villa features a sprawling garden ideal for intimate celebrations, sangeet ceremonies, cocktail parties, and private events for up to 150 guests, while comfortably hosting farm stays for 12–15 people. With ample parking, serene hill views, and complete privacy, The Kukas Villa is perfect for both relaxed getaways and elegant celebrations.

Wake up to the Aravallis. Celebrate under open skies. Stay in effortless luxury.

Detailed Property Description
Hidden amidst the tranquil landscapes of Khora Mina Gaon, near Kukas, Jaipur, The Kukas Villa is a refined private retreat set against the timeless beauty of the Aravalli hills. Designed for guests who value space, privacy, and scenic luxury, this two-floor villa offers a seamless blend of nature, comfort, and celebration-ready elegance.

Surrounded by rolling hills and open skies, the property opens into a vast, lush green garden—a versatile outdoor space that can comfortably accommodate up to 200 people. From quiet morning walks on dew-kissed grass to grand evening celebrations under the stars, the garden transforms effortlessly to suit every mood and occasion.

Accommodation
The Kukas Villa features three spacious, air-conditioned bedrooms, each with attached washrooms and geysers.
- Room by the Garden (Ground Floor)
- Aravalli View Room (First Floor)
- Sunset View Room (First Floor)`,
        features: [
            "Private 5-ft Swimming Pool",
            "Expansive Landscaped Garden (Events up to 150-200 pax)",
            "Fully Functional Kitchen",
            "Personal Caretaker On-site",
            "Air-conditioned Rooms",
            "Ample Parking Space",
            "Sangeet & Cocktail Party Venue",
            "Farm Stay (12-15 guests)",
            "Aravalli Hill Views"
        ]
    }
};

const SITE_SETTINGS = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'Stayra Luxury',
    contactEmail: 'contact@stayra.in',
    contactPhone: '+91 98765 43210',
    whatsappNumber: '919876543210',
    heroHeading: 'Experience the Art of Living',
    heroSubheading: "Jaipur's Premier Luxury Rental Collection"
};

const downloadImage = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const data = [];
            res.on('data', (chunk) => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
            res.on('error', (err) => reject(err));
        });
    });
};

async function uploadImage(pathOrUrl) {
    let buffer;
    if (pathOrUrl.startsWith('http')) {
        console.log(`Downloading image: ${pathOrUrl}`);
        buffer = await downloadImage(pathOrUrl);
    } else {
        console.log(`Reading local file: ${pathOrUrl}`);
        buffer = fs.readFileSync(pathOrUrl);
    }

    console.log(`Uploading to Sanity...`);
    const asset = await client.assets.upload('image', buffer);
    console.log(`Uploaded asset: ${asset._id}`);
    return asset._id;
}

async function seed() {
    console.log('Start seeding...');

    // 1. Site Settings
    console.log('Seeding Site Settings...');
    await client.createOrReplace(SITE_SETTINGS);
    console.log('Site Settings created.');

    // 2. Properties
    for (const [slug, data] of Object.entries(PROPERTIES)) {
        console.log(`Processing ${data.title}...`);

        // Handle Gallery Sections (New Structure)
        let mainImageId = null;
        let allImageIds = [];
        let gallerySectionsData = [];

        if (data.gallerySections) {
            for (const section of data.gallerySections) {
                const sectionImageIds = [];
                for (const imgUrl of section.images) {
                    try {
                        const id = await uploadImage(imgUrl);
                        sectionImageIds.push(id);
                        allImageIds.push(id); // Flatten for backward compat
                        if (!mainImageId) mainImageId = id; // First image as main
                    } catch (e) {
                        console.error(`Failed to upload image ${imgUrl}:`, e.message);
                    }
                }
                gallerySectionsData.push({
                    _key: section.title.toLowerCase().replace(/\s+/g, '-'),
                    title: section.title,
                    images: sectionImageIds.map(id => ({
                        _type: 'image',
                        asset: { _ref: id, _type: 'reference' }
                    }))
                });
            }
        }
        // Handle Legacy Flat Images (Choti Haveli case)
        else if (data.images) {
            for (const imgUrl of data.images) {
                try {
                    const id = await uploadImage(imgUrl);
                    allImageIds.push(id);
                    if (!mainImageId) mainImageId = id;
                } catch (e) {
                    console.error(`Failed to upload image ${imgUrl}:`, e.message);
                }
            }
        }

        if (!mainImageId) continue;

        const doc = {
            _type: 'property',
            title: data.title,
            slug: { _type: 'slug', current: slug },
            location: data.location,
            type: data.type,
            price: data.price,
            specs: data.specs,
            description: data.description,
            features: data.features,
            mainImage: {
                _type: 'image',
                asset: { _ref: mainImageId, _type: 'reference' }
            },
            gallery: allImageIds.map(id => ({
                _type: 'image',
                asset: { _ref: id, _type: 'reference' }
            })),
            gallerySections: gallerySectionsData.length > 0 ? gallerySectionsData : undefined
        };

        const docId = `property-${slug}`;
        doc._id = docId;

        await client.createOrReplace(doc);
        console.log(`Created property: ${data.title}`);
    }

    console.log('Seeding complete!');
}

seed();
