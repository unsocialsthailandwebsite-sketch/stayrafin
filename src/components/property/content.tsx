import { Wifi, Waves, Snowflake, Car, Shield, Utensils } from "lucide-react";

interface PropertyContentProps {
    description: string;
    amenities: string[];
}

export function PropertyContent({ description, amenities }: PropertyContentProps) {
    // Mapping amenities to Icons
    const getIcon = (amenity: string) => {
        const map: any = {
            'wifi': Wifi,
            'pool': Waves,
            'ac': Snowflake,
            'parking': Car,
            'security': Shield,
            'chef': Utensils
        };
        return map[amenity.toLowerCase()] || Shield;
    };

    return (
        <div className="py-12 space-y-12">
            {/* Description */}
            <section>
                <h2 className="font-serif text-2xl mb-6 text-stayra-charcoal">The Space</h2>
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    {description.split('\n').map((p, i) => (
                        <p key={i} className="mb-4">{p}</p>
                    ))}
                </div>
            </section>

            {/* Amenities Grid */}
            <section>
                <h2 className="font-serif text-2xl mb-6 text-stayra-charcoal">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {amenities.map((amenity) => {
                        const Icon = getIcon(amenity.split(' ')[0]); // Simple icon matching
                        return (
                            <div key={amenity} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-stayra-gold/30 transition-colors">
                                <Icon className="h-5 w-5 text-stayra-gold" />
                                <span className="text-sm font-medium text-gray-700">{amenity}</span>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why This Place */}
            <section className="bg-stayra-ivory p-8 rounded-lg border border-stayra-gold/20">
                <h2 className="font-serif text-2xl mb-4 text-stayra-charcoal">What Makes This Special</h2>
                <p className="text-gray-600 italic">
                    "The rooftop sunset lounge has become the backdrop for countless proposals and anniversary celebrations. Our guests often tell us it's the highlight of their Jaipur stay."
                </p>
            </section>
        </div>
    );
}
