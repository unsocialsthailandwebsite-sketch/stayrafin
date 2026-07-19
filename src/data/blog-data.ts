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
        id: "7",
        slug: "villa-vs-hotel-jaipur",
        title: "Villa vs Hotel in Jaipur: Why Smart Travellers Are Booking Private Villas",
        excerpt: "Comparing a private villa with a hotel for your Jaipur trip? Here's an honest look at cost, privacy, food and space — and why groups and families increasingly choose villas.",
        content: `
            <p>Planning a trip to the Pink City and torn between a hotel room and a private villa? You're not alone. Over the last few years, travellers to Jaipur — especially families, friend groups and couples celebrating something special — have been quietly switching from hotels to private villa stays. Here's an honest comparison to help you decide.</p>

            <h2>Space: A Room vs A Whole Home</h2>
            <p>A typical luxury hotel room in Jaipur gives you 300–400 square feet. A private villa gives you the entire property: multiple bedrooms, living spaces, lawns, terraces and often a private pool. At <a href="/properties/kankas-house">Kankas House</a>, for example, four bedrooms with attached balconies open onto manicured lawns and a 10x20 ft private pool set against Jaipur's forested hills — space no hotel suite can match.</p>

            <figure className="my-8">
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg" alt="Private Swimming Pool and Lawn at Kankas House Jaipur" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Private pool and expansive garden lawn at Stayra's Kankas House in Jaipur.</figcaption>
            </figure>

            <h2>Privacy: Shared Corridors vs Your Own Gates</h2>
            <p>Hotels are shared spaces — lobbies, pools, restaurants and corridors full of strangers. A villa is yours alone. Swim at midnight, host a bonfire, play music on the lawn, celebrate an anniversary on a rooftop terrace. There's no one to disturb and no one disturbing you. It's the reason villas have become the default choice for birthdays, small celebrations and family reunions in Jaipur.</p>

            <h2>Food: Menus vs Your Own Chef</h2>
            <p>Room service ends; a house chef doesn't. Villa stays like ours include home-cooked meals prepared fresh in the villa kitchen — authentic Rajasthani dishes made to your taste and schedule. Guests at <a href="/properties/choti-haveli">Chotti Haveli</a> consistently tell us the home-cooked local food is the highlight of their stay.</p>

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop" alt="In-house chef dining experience" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Enjoy fresh, home-cooked Rajasthani delicacies prepared by your private villa chef.</figcaption>
            </figure>

            <h2>Cost: The Math Favours Groups</h2>
            <p>Here's where it gets interesting. Four hotel rooms at a five-star property in Jaipur can easily cost ₹40,000–60,000 a night. A full luxury villa that sleeps eight often costs less than half of that — with more space, a private pool and a chef included. For groups of four or more, a villa isn't the indulgent option; it's the sensible one.</p>

            <h2>Character: Standard Rooms vs Heritage Homes</h2>
            <p>Jaipur's charm is its architecture and heritage. Chain hotels look the same in every city. A restored haveli or a designer villa is part of the experience itself — traditional Rajasthani architecture, earthy interiors, rooftop sunsets over the Aravallis. You don't just stay near the culture; you stay in it.</p>

            <h2>When a Hotel Still Makes Sense</h2>
            <p>To be fair: if you're a solo business traveller staying one night near the airport, a hotel is simpler. Villas shine for stays of two nights or more, groups of three or more, and any trip where the stay itself is part of the celebration.</p>

            <h2>Booking Direct: The Final Advantage</h2>
            <p>Booking a villa directly with the host — rather than through an aggregator — usually means better rates (no commission built in), direct WhatsApp contact with the team on the ground, and stays tailored to your plans: airport transfers, curated local experiences, celebration setups. That's exactly how we run things at Stayra. Browse <a href="/properties">our Jaipur villas</a> or message our concierge on WhatsApp — typical response time is under two hours.</p>
        `,
        date: "July 10, 2026",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop",
        tags: ["Villa vs Hotel", "Jaipur", "Luxury Villa", "Travel Tips"]
    },
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

            <figure className="my-8">
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg" alt="Serene Farm Stay surrounding Aravalli Hills" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Vast manicured lawns and serene hillside atmosphere at farm stays near Jaipur.</figcaption>
            </figure>

            <h2>Activities at a Farm Stay</h2>
            <ul>
                <li><strong>Organic Farming:</strong> Learn how your food is grown and try your hand at gardening.</li>
                <li><strong>Nature Walks:</strong> Explore the surrounding landscapes and enjoy the local flora and fauna.</li>
                <li><strong>Bonfires:</strong> Gather around a warm fire under the starlit sky for an unforgettable evening.</li>
            </ul>

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" alt="Nature walks and sunset views" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Peaceful sunset views and nature trails in the countryside surrounding Jaipur.</figcaption>
            </figure>

            <p>Next time you visit Jaipur, skip the crowded city hotels and opt for a serene farm stay. It's an experience you won't regret.</p>
        `,
        date: "October 15, 2023",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
        tags: ["Farm Stay", "Jaipur", "Weekend Getaway", "Nature"]
    },
    {
        id: "2",
        slug: "heritage-homes-jaipur",
        title: "Living Like Royalty: A Guide to Heritage Homes in Jaipur",
        excerpt: "Step back in time and experience the grandeur of Rajasthan by staying in a restored heritage home. Discover the magic of Chotti Haveli and other architectural gems.",
        content: `
            <p>Rajasthan is synonymous with royalty, and there's no better way to experience it than by staying in a heritage home. These properties, often centuries old, have been lovingly restored to offer modern amenities while preserving their historical charm.</p>

            <h2>Chotti Haveli: A Hidden Gem</h2>
            <p>In Emaar Greens on Ajmer Road lies Chotti Haveli, a boutique heritage property that captures the essence of traditional Rajasthani architecture. With its intricate carvings, open courtyards, and antique furnishings, staying here is like living in a living museum.</p>

            <figure className="my-8">
                <img src="https://cdn.sanity.io/images/1tjvajrl/production/4a15031cde0ade6baf548dd99ea779b1c33f992d-1279x960.heif" alt="Chotti Haveli Courtyard and Architectural Features" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Traditional courtyard architecture and tranquil indoor fish pond at Chotti Haveli.</figcaption>
            </figure>

            <h2>What to Expect</h2>
            <p>Heritage homes offer a level of personalized service and cultural immersion that large hotels simply can't match. You can expect:</p>
            <ul>
                <li><strong>Authentic Architecture:</strong> High ceilings, jharokhas, and frescoes.</li>
                <li><strong>Traditional Cuisine:</strong> Home-cooked meals using age-old family recipes.</li>
                <li><strong>Storytelling:</strong> Hosts who are eager to share the history and legends of the property.</li>
            </ul>

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2000&auto=format&fit=crop" alt="Royal Rajasthani Palace Architecture" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Intricate jharokhas and sandstone arches typical of Jaipur heritage homes.</figcaption>
            </figure>

            <p>For a truly unforgettable stay in Jaipur, choose a heritage home. It's not just accommodation; it's a journey into the past.</p>
        `,
        date: "November 2, 2023",
        author: "Stayra Team",
        image: "https://cdn.sanity.io/images/1tjvajrl/production/cb2ef8c7eb4ed5f05fbb700ddddb35cc043b1acc-1279x960.jpg",
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

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2000&auto=format&fit=crop" alt="Amber Fort in Jaipur during Winter" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Crisp winter sunshine illuminating Amber Fort overlooking Maota Lake in Jaipur.</figcaption>
            </figure>

            <h2>Cultural Festivals</h2>
            <p>Winter in Jaipur is packed with cultural events, including the famous Jaipur Literature Festival and the kite festival (Makar Sankranti). These events bring the city to life and offer a deep dive into Rajasthani culture.</p>

            <h2>Bonfire Nights</h2>
            <p>Evenings can get chilly, which is the perfect excuse to enjoy a bonfire at your stay. Properties like The Kukas Villa offer excellent outdoor settings for cozy winter nights with family and friends.</p>

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=2000&auto=format&fit=crop" alt="Cozy outdoor bonfire night" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Warm bonfire nights under the starry sky at Stayra luxury retreat villas.</figcaption>
            </figure>

            <p>Plan your trip this winter and experience Jaipur at its best.</p>
        `,
        date: "December 10, 2023",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop",
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

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop" alt="Eco-friendly stay immersed in nature" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Eco-friendly hospitality immersed in green, natural surroundings.</figcaption>
            </figure>

            <h2>Support Local Artisans</h2>
            <p>Rajasthan is famous for its handicrafts. Instead of buying mass-produced souvenirs, purchase directly from local artisans. This ensures that your money goes to the people who keep these traditional crafts alive.</p>

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop" alt="Traditional Rajasthani Handicrafts" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Supporting local artisans preserves centuries-old Rajasthani crafts and culture.</figcaption>
            </figure>

            <h2>Respect the Culture</h2>
            <p>Rajasthan has a rich and conservative culture. Dress modestly, ask for permission before taking photos of people, and respect local customs and traditions.</p>

            <p>By traveling responsibly, you can help preserve the beauty and culture of Rajasthan for future generations.</p>
        `,
        date: "January 5, 2024",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=2000&auto=format&fit=crop",
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

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2000&auto=format&fit=crop" alt="Dal Baati Churma and Traditional Indian Thali" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Dal Baati Churma: The iconic Rajasthani meal baked in ghee and packed with authentic flavors.</figcaption>
            </figure>

            <h2>Laal Maas</h2>
            <p>For meat lovers, Laal Maas is a must. This fiery mutton curry is cooked with red chilies and yogurt, resulting in a rich, spicy flavor that packs a punch.</p>

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2000&auto=format&fit=crop" alt="Aromatic Laal Maas Curry" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Fiery Laal Maas curry simmered with Mathania red chilies and traditional spices.</figcaption>
            </figure>

            <h2>Ghevar</h2>
            <p>End your meal on a sweet note with Ghevar, a disc-shaped sweet made from flour, ghee, and milk, soaked in sugar syrup. It's especially popular during the monsoon season.</p>

            <p>Whether you're eating at a street stall or a fine dining restaurant, the food in Jaipur is sure to delight your taste buds.</p>
        `,
        date: "January 20, 2024",
        author: "Dishant",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=2000&auto=format&fit=crop",
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

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" alt="Road Trip from Delhi to Jaipur" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">A smooth 4 to 5 hour drive from Delhi makes Jaipur the quintessential weekend escape.</figcaption>
            </figure>

            <h2>Diverse Experiences</h2>
            <p>Whether you want to explore historical forts, shop for jewelry, or simply relax at a luxury villa like The Kukas Villa, Jaipur has something for everyone. It's a city that effortlessly blends the old with the new.</p>

            <h2>Stayra's Unique Offerings</h2>
            <p>At Stayra, we offer curated experiences that go beyond standard accommodation. From heritage homes to farm stays, our properties are designed to provide a home away from home.</p>

            <figure className="my-8">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000&auto=format&fit=crop" alt="Stayra Luxury Villa Getaway" className="rounded-xl w-full h-[400px] object-cover shadow-md" />
                <figcaption className="text-center text-sm text-gray-500 mt-2 font-sans">Unwind in private luxury at a Stayra villa away from city traffic and stress.</figcaption>
            </figure>

            <p>Pack your bags and head to Jaipur this weekend. A world of culture, history, and relaxation awaits.</p>
        `,
        date: "February 1, 2024",
        author: "Stayra Team",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop",
        tags: ["Travel", "Delhi", "Road Trip", "Weekend"]
    }
];
