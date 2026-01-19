
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
        specs: "4 Bedrooms | Sleeps 8",
        price: '₹35,000 / night',
        type: 'heritage',
        images: [
            "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3264&auto=format&fit=crop", // Courtyard
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop", // Pool
            "https://images.unsplash.com/photo-1600596542815-e32cbee30df3?q=80&w=3274&auto=format&fit=crop", // Bedroom
        ],
        description: `Choti Haveli is a meticulously restored heritage property where colonial elegance meets modern comfort.`,
        features: ["WiFi High-Speed", "Pool Private", "Chef Available", "AC Climate Control", "Parking Valet", "Security 24/7"]
    },
    "the-kukas-villa": {
        title: "The Kukas Villa",
        location: "Jaipur Outskirts",
        specs: "3 Bedrooms | Sleeps 6",
        price: '₹55,000 / night',
        type: 'modern',
        images: [
            "https://images.unsplash.com/photo-1613553507747-9f5312f48df9?q=80&w=2835&auto=format&fit=crop", // Modern Exterior
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=3270&auto=format&fit=crop", // Pool
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2700&auto=format&fit=crop", // Modern Living
        ],
        description: "A modern farmhouse luxury experience located on the outskirts of Jaipur, offering serenity and style.",
        features: ["WiFi", "Pool", "Parking", "Mountain View", "Private Garden"]
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

async function uploadImage(url) {
    console.log(`Downloading image: ${url}`);
    const buffer = await downloadImage(url);
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

        // Upload images
        const imageIds = [];
        for (const imgUrl of data.images) {
            try {
                const id = await uploadImage(imgUrl);
                imageIds.push(id);
            } catch (e) {
                console.error(`Failed to upload image ${imgUrl}:`, e.message);
            }
        }

        if (imageIds.length === 0) continue;

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
                asset: { _ref: imageIds[0], _type: 'reference' }
            },
            gallery: imageIds.map(id => ({
                _type: 'image',
                asset: { _ref: id, _type: 'reference' }
            }))
        };

        // Check if exists to avoid dupes, or just create
        // Simplest: Create new or patch if known ID. We don't have IDs, so we'll query by slug or just create.
        // Let's use createOrReplace using a deterministic ID based on slug to allow re-running script safely.
        const docId = `property-${slug}`;
        doc._id = docId;

        await client.createOrReplace(doc);
        console.log(`Created property: ${data.title}`);
    }

    console.log('Seeding complete!');
}

seed();
