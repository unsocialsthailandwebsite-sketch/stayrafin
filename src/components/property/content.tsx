"use client";

import { useState } from "react";
import { Wifi, Waves, Snowflake, Car, Shield, Utensils, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyContentProps {
    description: string;
    amenities: string[];
}

export function PropertyContent({ description, amenities }: PropertyContentProps) {
    const [isExpanded, setIsExpanded] = useState(false);

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

    // Split description into paragraphs (assuming double newline separation)
    // We will show the first part roughly up to the first double newline or 300 chars if no split found
    const shortDescription = description.split('\n\n')[0];

    return (
        <div className="py-12 space-y-12">

            {/* About This Space Section */}
            <section>
                <div className="prose prose-lg text-gray-600 max-w-none">
                    <h2 className="font-serif text-3xl text-stayra-charcoal mb-6 font-bold">About this space</h2>

                    <div
                        className="whitespace-pre-line leading-relaxed description-content transition-all duration-300 relative"
                    >
                        {/* We render conditional content based on state */}
                        {isExpanded ? (
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        ) : (
                            <div>
                                <div dangerouslySetInnerHTML={{ __html: shortDescription }} />
                                {/* Gradient Overlay for text fade effect */}
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" />
                            </div>
                        )}
                    </div>

                    <Button
                        variant="ghost"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 text-stayra-gold hover:text-stayra-gold/80 hover:bg-transparent p-0 font-medium flex items-center gap-1"
                    >
                        {isExpanded ? (
                            <>Read Less <ChevronUp className="w-4 h-4" /></>
                        ) : (
                            <>Read More <ChevronDown className="w-4 h-4" /></>
                        )}
                    </Button>
                </div>
            </section>

            {/* Amenities Grid */}
            <section>
                <h2 className="font-serif text-2xl mb-6 text-stayra-charcoal font-bold">Amenities</h2>
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
                <h2 className="font-serif text-2xl mb-4 text-stayra-charcoal font-bold">What Makes This Special</h2>
                <p className="text-gray-600 italic">
                    "The rooftop sunset lounge has become the backdrop for countless proposals and anniversary celebrations. Our guests often tell us it's the highlight of their Jaipur stay."
                </p>
            </section>
        </div>
    );
}
