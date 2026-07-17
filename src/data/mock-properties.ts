export const MOCK_PROPERTIES: Record<string, {
    title: string;
    location: string;
    specs: string;
    price: string;
    description: string;
    features: string[];
    images: string[];
    gallerySections: any[];
    mapUrl: string;
    tagline: string;
    badge?: string;
    reviews?: {
        name: string;
        location: string;
        rating: number;
        text: string;
        date: string;
    }[];
}> = {
    "choti-haveli": {
        title: "Choti Haveli",
        location: "Emaar Greens, Ajmer Road",
        specs: "1 Bedroom | Sleeps 4",
        price: "Price on Request",
        badge: "Couple's Favourite",
        description: `Explore a timeless voyage where Rajasthan's majestic history blends seamlessly with contemporary luxuries and tranquil natural surroundings. Situated within the Emaar Group's portfolio, this gated community offers round-the-clock security and is nestled amidst 23 acres of expansive greenery, providing a perfect sanctuary.

<strong>Why Chotti Haveli</strong>
Designed for couples who crave stillness and soul. Enjoy golden sunsets from the garden, wrapped in the charm of timeless Rajasthani architecture. A tranquil indoor fish pond sets the mood for slow mornings and intimate evenings—where every moment feels effortlessly romantic. It is a place to reconnect, celebrate love, and enjoy stillness together.

<strong>Bedroom</strong>
This elegant bedroom blends Rajasthani heritage with modern comfort. A spacious king-size bed, warm tones, and handcrafted details offer a calming retreat, ideal for couples seeking privacy, comfort, and timeless charm.

<strong>Private Kitchen</strong>
A fully equipped private kitchen designed for comfort and convenience. You’ll find every basic essential, along with a coffee machine, microwave, and a spacious double-door refrigerator perfect for relaxed meals and effortless hosting.`,
        features: [
            "Restored Heritage Haveli (1 BHK)",
            "Located in Emaar Greens, Ajmer Road",
            "Tranquil Indoor Fish Pond",
            "Private Garden / Lawn Area",
            "Fully Equipped Private Kitchen",
            "Gated Community with 24/7 Security",
            "Nestled in 23 Acres of Expansive Greenery",
            "Chef on Call (Meals Prepared Privately)",
            "Chauffeur on Call & Airport Transfers",
            "Candlelight Dinner Setup (on request)",
            "High-speed WiFi & Daily Housekeeping"
        ],
        images: [
            "https://cdn.sanity.io/images/1tjvajrl/production/e15abc6a1533ef147337803f1e9b45b6bae51980-1280x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/4dbb06866de0df7ad6825ef3b32e558185cda76a-1279x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/cb2ef8c7eb4ed5f05fbb700ddddb35cc043b1acc-1279x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/4a15031cde0ade6baf548dd99ea779b1c33f992d-1279x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/d5c2bf0f618727815531431a25e8ca6447c71db3-721x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/58c635cc663488d103fd3b54e949cd89a5b3ddb1-1279x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/a8f8d1dbdbd97b85486018b681a91b9a89c158b6-1279x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/cdbc79514058e29b6ebd07b271282804a35099a5-1279x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/8c12a5609f181a93c90bdc25abe0cd9136e6d6d9-768x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/0e6feb34609f05f1f8bca5e8bce804eb8d87fc74-768x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/f2a0fd7eb023e7ebf81ce4fca03f86cdcab3f8d8-1280x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/8e2e4f2d029375ca0d645ca3ac299b5d950a59d0-1279x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/eb594fc62e9612e2a64b6fb8c164e17ff57f326c-720x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/258953ad55118661a7f15e32cf6c08c610b6ca8c-721x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/108cae94efbd8b9163f052af9fc6ecf6c3b6d7bf-1279x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/cfd25e76b2274c4761642988fdd7be4ce56f9404-1279x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/aa6c7bad096e505fa75015f87e2e7b73238e9bce-721x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/4c4ea165b18515b5a5ea4e6eb0d1e89de5f73e47-1280x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/6d7f4d2700924a4762adf89071ed53f9be608688-1279x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/96cc85cbea93e3a2c2dab9f641de985dc4806ac1-640x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/87e00b35b7b96b230da030d94db51777fce52585-768x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/422f8e9365edfb98d4b51a386bf4264f2520c2d6-1279x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/2b473ef2f81b43a689bb2a453459d42176f41179-1280x960.heif",
            "https://cdn.sanity.io/images/1tjvajrl/production/b7ae5d0db6aaf415d1df23d546e05777625361a9-1279x960.jpg",
            "https://cdn.sanity.io/images/1tjvajrl/production/e7db8b145f192c4e218725bb3ddf8a84e6ac6a2b-1280x960.jpg"
        ],
        gallerySections: [],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.67794364024!2d75.6322!3d26.7909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b001a96d0f7%3A0xca04df41d0abd1ff!2sEmaar%20Jaipur%20Greens!5e0!3m2!1sen!2sin",
        tagline: "HERITAGE LUXURY",
        reviews: [
            {
                name: "Rahul Sharma",
                location: "New Delhi",
                rating: 5,
                text: "A beautiful slice of Rajasthani heritage combined with modern, clean comforts. We loved spending our evenings in the private garden.",
                date: "May 2026"
            },
            {
                name: "Preeti Goyal",
                location: "Jaipur",
                rating: 5,
                text: "Absolutely stunning property. The local food prepared by the house chef was delicious, and the service was top-notch.",
                date: "June 2026"
            }
        ]
    },
    "kankas-house": {
        title: "Kankas House",
        location: "Bagwara, Delhi Road, Jaipur",
        specs: "4 Bedrooms | Private Pool | Hill Views",
        price: "Price on Request",
        description: `Nestled amidst the quiet embrace of Jaipur's forested hills, Kankas House is a sanctuary where nature's calm meets timeless elegance. The villa welcomes you with earthy interiors that radiate elemental charm, combining warmth and grandeur in every detail. Designed for both relaxation and togetherness, this retreat unfolds into open lawns and picturesque sit-outs, inviting guests to pause, breathe, and admire the surrounding views.

At its heart lies a private pool, perfect for leisurely swims or basking afternoons under the soft Rajasthani sun. As dusk descends, the ambience transforms—crackling bonfires and aromatic barbecue evenings create the ideal setting to bond with loved ones beneath a starlit sky. Indoors, a thoughtful selection of board and indoor games ensures that joy and laughter never fade, no matter the hour. Whether seeking solitude, shared moments, or simply a deeper connection with nature, Kankas House promises a stay that feels both luxurious and soulfully grounding.

<strong>The Space</strong>
Kankas House stands out as one of the top villas in Jaipur due to its serene, secluded location amidst forest and hill views, earthy interiors with elemental grandeur, private pool to relax and unwind, manicured lawn with picturesque sit-outs, and barbecue/bonfire services to bond with loved ones.

<strong>Bedrooms</strong>
The villa features 4 spacious, well-furnished bedrooms (2 on the ground floor, 2 on the first floor). Each bedroom is equipped with AC, TV, Wi-Fi, and single mattress, complete with ensuite bathrooms and attached balconies.

<strong>Bathrooms</strong>
There are 4 attached bathrooms and 1 common bathroom. All bathrooms feature geysers, towels, and basic toiletries. One of the bathrooms also features a bathtub.

<strong>Living & Dining</strong>
The villa has a spacious living room equipped with AC, TV, Wi-Fi, a sound system, a game console, and a dining area to enjoy delicious meals.

<strong>Lawn & Pool</strong>
Step outside to a manicured lawn (20x20 sq. ft) that can seat up to 50 people, perfect for outdoor gatherings. Unwind in the private outdoor pool (10 ft x 20 ft, depth 4.5 ft) or lounge in the open garden sit-out space.`,
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
        ],
        images: [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/73653bf7-e972-44a4-9924-d0b47f098280.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1c2a9fe1-ce5a-4d87-a19e-92096ddd44d6.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/826e74e7-c2d1-4e35-9f61-6e09ec0ae2e0.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/2676bc64-9834-426e-96fb-7c26d66cfc13.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/ddf4c780-9acb-4cd6-a36b-bb38296c85e7.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/d44eddf4-daac-48d4-8630-1cbb2e648e22.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/ed5b3545-9979-4fa6-8b30-8a66d538d8b3.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/d9cf01b7-f1e9-417d-95a7-014626399c68.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/51cdc42e-4316-49b7-883b-7b96196cf62a.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/24176e49-3f42-42e9-970c-bb4a4a5d3236.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/7090ac4f-9084-4361-8a3d-9553e7aa7f4d.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/bfb8d458-fd2d-40bc-a744-7b99d6805632.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/e993dd33-9979-4fc3-bcbf-0812297b720f.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/5a92a987-b864-4997-9cdb-e0305f4b5519.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/0216b83e-c586-4030-82b3-ea5f318f3dc1.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/47dc60ec-59cc-4764-a219-b2695b9d0c32.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/e494bc4b-c3a1-4c1e-b268-b08348737269.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/783f28bf-656e-401e-884f-fc50f611c11b.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/89b99163-1d05-4398-9062-87e1e23b6f58.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/434a5405-416d-4b68-9e2c-9665b52fbb94.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/58df1f5b-8436-4154-85d6-18d880e665de.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/2b4888fa-5268-44b4-b9be-e0a0fba41ce3.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/928bf148-fb0d-40ad-9b33-71ac17aa5647.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/5c3cce0a-9263-4793-9505-a3ef1c989b92.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/c2ae21de-6e4e-4438-a19d-8573f93b297d.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/16772c28-bfa5-4da4-8ca6-518c8ec05633.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1528138c-a063-4bc5-8539-407a424ec23d.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/3be87fe9-1097-4d06-9ed5-a88d3d169732.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/5b1ec11b-13a3-49c3-ba7d-451affd029b3.jpeg"
        ],
        gallerySections: [],
        mapUrl: "https://maps.google.com/maps?q=27.07375,75.88969&z=15&output=embed",
        tagline: "LUXURY VILLA",
        badge: "Most Preferred",
        reviews: [
            {
                name: "Rahul Sharma",
                location: "New Delhi",
                rating: 5,
                text: "Beautiful property nestled in the hills. The private pool and bonfire setup were perfect for our weekend getaway. The caretaker was extremely polite and helpful.",
                date: "June 2026"
            },
            {
                name: "Priya Gupta",
                location: "Jaipur",
                rating: 5,
                text: "An absolute gem of a place close to Jaipur. Waking up to the serene forest view was amazing. Highly recommend Kankas House for anyone wanting tranquility.",
                date: "June 2026"
            },
            {
                name: "Amit Verma",
                location: "New Delhi",
                rating: 5,
                text: "The architecture and earthy interiors are stunning. Sprawling lawns and delicious meals. Great for family outings and celebrations.",
                date: "May 2026"
            },
            {
                name: "Sanjay Singh",
                location: "Jaipur",
                rating: 5,
                text: "Peaceful atmosphere away from the city noise. Excellent pool maintenance. We had an incredible time with board games, bonfire and barbecue.",
                date: "June 2026"
            },
            {
                name: "Neha Joshi",
                location: "New Delhi",
                rating: 5,
                text: "Extremely spacious rooms with beautiful balconies. The bathtubs are a great touch of luxury. Excellent hospitality, will visit again next winter.",
                date: "April 2026"
            }
        ]
    }
};
