export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "best-farm-stays-jaipur",
        title: "Escape the City: The Best Farm Stays Near Jaipur for a Weekend Getaway",
        excerpt: "Discover the tranquility of rural Rajasthan with our guide to the best farm stays near Jaipur. Experience organic living, fresh air, and traditional hospitality.",
        content: `
            <p>Jaipur, the Pink City, is known for its royal palaces and vibrant culture. But sometimes, you just need a break from the hustle and bustle. That's where farm stays come in. Offering a perfect blend of rustic charm and modern comfort, farm stays near Jaipur are becoming the go-to choice for travelers seeking peace and authenticity.</p>
            
            <h2>Why Choose a Farm Stay?</h2>
            <p>Unlike standard hotels, farm stays offer an immersive experience. Imagine waking up to the sound of birds, breathing in fresh, pollution-free air, and enjoying meals made from organic produce grown right on the property. It's a chance to reconnect with nature and yourself.</p>

            <h2>Experience The Kukas Villa</h2>
            <p>Located just a short drive from Jaipur, The Kukas Villa is a prime example of a luxurious farm stay experience. Surrounded by the Aravalli hills, it offers vast open spaces, private pools, and lush gardens. Whether you're planning a family reunion or a quiet retreat, the villa provides the perfect backdrop.</p>

            <h2>Activities at a Farm Stay</h2>
            <ul>
                <li><strong>Organic Farming:</strong> Learn how your food is grown and try your hand at gardening.</li>
                <li><strong>Nature Walks:</strong> Explore the surrounding landscapes and enjoy the local flora and fauna.</li>
                <li><strong>Bonfires:</strong> Gather around a warm fire under the starlit sky for an unforgettable evening.</li>
            </ul>

            <p>Next time you visit Jaipur, skip the crowded city hotels and opt for a serene farm stay. It's an experience you won't regret.</p>
        `,
        date: "October 15, 2023",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2071&auto=format&fit=crop",
        tags: ["Farm Stay", "Jaipur", "Weekend Getaway", "Nature"]
    },
    {
        id: "2",
        slug: "heritage-homes-jaipur",
        title: "Living Like Royalty: A Guide to Heritage Homes in Jaipur",
        excerpt: "Step back in time and experience the grandeur of Rajasthan by staying in a restored heritage home. Discover the magic of Choti Haveli and other architectural gems.",
        content: `
            <p>Rajasthan is synonymous with royalty, and there's no better way to experience it than by staying in a heritage home. These properties, often centuries old, have been lovingly restored to offer modern amenities while preserving their historical charm.</p>

            <h2>Choti Haveli: A Hidden Gem</h2>
            <p>In the heart of Jaipur's C-Scheme lies Choti Haveli, a boutique heritage property that captures the essence of traditional Rajasthani architecture. With its intricate carvings, open courtyards, and antique furnishings, staying here is like living in a living museum.</p>

            <h2>What to Expect</h2>
            <p>Heritage homes offer a level of personalized service and cultural immersion that large hotels simply can't match. You can expect:</p>
            <ul>
                <li><strong>Authentic Architecture:</strong> High ceilings, jharokhas, and frescoes.</li>
                <li><strong>Traditional Cuisine:</strong> Home-cooked meals using age-old family recipes.</li>
                <li><strong>Storytelling:</strong> Hosts who are eager to share the history and legends of the property.</li>
            </ul>

            <p>For a truly unforgettable stay in Jaipur, choose a heritage home. It's not just accommodation; it's a journey into the past.</p>
        `,
        date: "November 2, 2023",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1599661046289-e318d6d4bd82?q=80&w=2070&auto=format&fit=crop",
        tags: ["Heritage", "Architecture", "Culture", "Luxury"]
    },
    {
        id: "3",
        slug: "winter-in-jaipur",
        title: "Why Winter is the Perfect Time to Visit Jaipur",
        excerpt: "From pleasant weather to vibrant festivals, find out why winter is the ideal season to explore the Pink City and its surroundings.",
        content: `
            <p>Jaipur is a city of extremes, with scorching summers and chilly winters. However, the winter months (October to March) offer the most pleasant weather, making it the perfect time to explore the city's outdoor attractions.</p>

            <h2>Perfect Weather for Sightseeing</h2>
            <p>With daytime temperatures hovering around 20-25°C, you can comfortably visit the Amber Fort, Hawa Mahal, and City Palace without breaking a sweat. It's also the best time for outdoor activities like elephant rides and shopping in the colorful bazaars.</p>

            <h2>Cultural Festivals</h2>
            <p>Winter in Jaipur is packed with cultural events, including the famous Jaipur Literature Festival and the kite festival (Makar Sankranti). These events bring the city to life and offer a deep dive into Rajasthani culture.</p>

            <h2>Bonfire Nights</h2>
            <p>Evenings can get chilly, which is the perfect excuse to enjoy a bonfire at your stay. Properties like The Kukas Villa offer excellent outdoor settings for cozy winter nights with family and friends.</p>

            <p>Plan your trip this winter and experience Jaipur at its best.</p>
        `,
        date: "December 10, 2023",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
        tags: ["Winter Travel", "Festivals", "Travel Tips"]
    },
    {
        id: "4",
        slug: "sustainable-tourism-rajasthan",
        title: "Sustainable Tourism: How to Travel Responsibly in Rajasthan",
        excerpt: "Learn how to minimize your footprint and support local communities while exploring the beautiful state of Rajasthan.",
        content: `
            <p>As travelers, we have a responsibility to protect the places we visit. Sustainable tourism is all about making conscious choices that benefit the environment and local communities. Here is how you can travel responsibly in Rajasthan.</p>

            <h2>Choose Eco-Friendly Stays</h2>
            <p>Look for accommodations that implement eco-friendly practices, such as water conservation, waste management, and solar energy. Many farm stays and heritage hotels are leading the way in sustainable hospitality.</p>

            <h2>Support Local Artisans</h2>
            <p>Rajasthan is famous for its handicrafts. Instead of buying mass-produced souvenirs, purchase directly from local artisans. This ensures that your money goes to the people who keep these traditional crafts alive.</p>

            <h2>Respect the Culture</h2>
            <p>Rajasthan has a rich and conservative culture. Dress modestly, ask for permission before taking photos of people, and respect local customs and traditions.</p>

            <p>By traveling responsibly, you can help preserve the beauty and culture of Rajasthan for future generations.</p>
        `,
        date: "January 5, 2024",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1534234828563-0259929555c8?q=80&w=2000&auto=format&fit=crop",
        tags: ["Sustainability", "Eco-Travel", "Responsible Tourism"]
    },
    {
        id: "5",
        slug: "jaipur-food-guide",
        title: "A Foodie's Guide to Jaipur: Must-Try Dishes and Where to Find Them",
        excerpt: "Embark on a culinary journey through Jaipur. From Dal Baati Churma to Ghevar, discover the flavors that define Rajasthani cuisine.",
        content: `
            <p>No trip to Jaipur is complete without indulging in its delicious cuisine. Rajasthani food is known for its rich flavors, generous use of ghee, and variety of spices. Here are some must-try dishes.</p>

            <h2>Dal Baati Churma</h2>
            <p>The quintessential Rajasthani dish, Dal Baati Churma consists of baked wheat balls (baati) served with spicy lentils (dal) and a sweet crumbled wheat mixture (churma). It's a heavy, wholesome meal that will leave you satisfied.</p>

            <h2>Laal Maas</h2>
            <p>For meat lovers, Laal Maas is a must. This fiery mutton curry is cooked with red chilies and yogurt, resulting in a rich, spicy flavor that packs a punch.</p>

            <h2>Ghevar</h2>
            <p>End your meal on a sweet note with Ghevar, a disc-shaped sweet made from flour, ghee, and milk, soaked in sugar syrup. It's especially popular during the monsoon season.</p>

            <p>Whether you're eating at a street stall or a fine dining restaurant, the food in Jaipur is sure to delight your taste buds.</p>
        `,
        date: "January 20, 2024",
        author: "Dishant",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2021&auto=format&fit=crop",
        tags: ["Food", "Cuisine", "Jaipur", "Travel Guide"]
    },
    {
        id: "6",
        slug: "weekend-getaways-from-delhi",
        title: "Top Weekend Getaways from Delhi: Why Jaipur Should Be Your Top Choice",
        excerpt: "Looking for a quick escape from Delhi? Discover why Jaipur and its surrounding farm stays offer the perfect mix of proximity and relaxation.",
        content: `
            <p>Living in the capital can be stressful, and sometimes you just need to get away. Jaipur, located just a few hours' drive from Delhi, is the perfect destination for a weekend recharge.</p>

            <h2>Easy Accessibility</h2>
            <p>The Delhi-Jaipur highway makes the drive smooth and scenic. You can reach the Pink City in under 5 hours, giving you plenty of time to explore and relax.</p>

            <h2>Diverse Experiences</h2>
            <p>Whether you want to explore historical forts, shop for jewelry, or simply relax at a luxury villa like The Kukas Villa, Jaipur has something for everyone. It's a city that effortlessly blends the old with the new.</p>

            <h2>Stayra's Unique Offerings</h2>
            <p>At Stayra, we offer curated experiences that go beyond standard accommodation. From heritage homes to farm stays, our properties are designed to provide a home away from home.</p>

            <p>Pack your bags and head to Jaipur this weekend. A world of culture, history, and relaxation awaits.</p>
        `,
        date: "February 1, 2024",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=2000&auto=format&fit=crop",
        tags: ["Travel", "Delhi", "Road Trip", "Weekend"]
    }
];
