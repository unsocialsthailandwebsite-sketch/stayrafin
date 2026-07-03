
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
    "kankas-house": {
        title: "Kankas House",
        location: "Bagwara, Delhi Road, Jaipur",
        specs: "4 Bedrooms | Sleeps 8",
        price: 'Price on Request',
        type: 'villa',
        images: [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/73653bf7-e972-44a4-9924-d0b47f098280.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1c2a9fe1-ce5a-4d87-a19e-92096ddd44d6.jpeg"
        ],
        description: `Nestled amidst the quiet embrace of Jaipur's forested hills, Kankas House is a sanctuary where nature's calm meets timeless elegance. The villa welcomes you with earthy interiors that radiate elemental charm, combining warmth and grandeur in every detail. Designed for both relaxation and togetherness, this retreat unfolds into open lawns and picturesque sit-outs, inviting guests to pause, breathe, and admire the surrounding views.

At its heart lies a private pool, perfect for leisurely swims or basking afternoons under the soft Rajasthani sun. As dusk descends, the ambience transforms—crackling bonfires and aromatic barbecue evenings create the ideal setting to bond with loved ones beneath a starlit sky. Indoors, a thoughtful selection of board and indoor games ensures that joy and laughter never fade, no matter the hour. Whether seeking solitude, shared moments, or simply a deeper connection with nature, Kankas House promises a stay that feels both luxurious and soulfully grounding.

The space
Kankas House stands out as one of the top villas in Jaipur due to its serene, secluded location amidst forest and hill views, earthy interiors with elemental grandeur, private pool to relax and unwind, manicured lawn with picturesque sit-outs, and barbecue/bonfire services to bond with loved ones.

BEDROOMS
The villa features 4 spacious, well-furnished bedrooms (2 on the ground floor, 2 on the first floor). Each bedroom is equipped with AC, TV, Wi-Fi, and single mattress, complete with ensuite bathrooms and attached balconies.

BATHROOMS
There are 4 attached bathrooms and 1 common bathroom. All bathrooms feature geysers, towels, and basic toiletries. One of the bathrooms also features a bathtub.

LIVING ROOM & DINING AREA
There is 1 living room. Include AC, TV, Wi-Fi, a sound system, a game console, and a CCTV. Comes with a dining area.

LAWN & POOL
There is a manicured lawn (20x20 sq. ft) that can seat up to 50 people, and a private outdoor pool (10 ft x 20 ft, depth 4.5 ft).`,
        features: [
            "Secluded location amidst forest & hill views",
            "Earthy interiors with elemental grandeur",
            "Private outdoor swimming pool (10ft x 20ft)",
            "Manicured lawn & open garden sit-out space",
            "Outdoor BBQ & bonfire setup",
            "4 spacious bedrooms with attached balconies",
            "4 ensuite bathrooms + 1 common bathroom",
            "Bathtub in bathroom",
            "Air conditioning & TV in all rooms",
            "High-speed WiFi & Sound system",
            "Indoor & board games (with game console)",
            "Daily housekeeping & toiletries",
            "On-site parking available"
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
