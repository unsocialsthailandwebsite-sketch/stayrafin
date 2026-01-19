"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "London, UK",
        rating: 5,
        text: "The most serene experience of my life. The villa was breathtaking, and the service was impeccable. Truly a hidden gem.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Michael Chen",
        location: "Singapore",
        rating: 5,
        text: "Stayra exceeded all expectations. The attention to detail in the design and the connection to nature made it unforgettable.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Emma Wilson",
        location: "Sydney, Australia",
        rating: 5,
        text: "A perfect blend of luxury and comfort. We loved every moment of our stay. Highly recommended for families.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-stayra-green text-white relative overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-stayra-gold font-accent text-sm tracking-[0.2em] uppercase">Testimonials</span>
                    <h2 className="font-serif text-4xl md:text-5xl">What Guests Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm hover:transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex gap-1 text-stayra-gold mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-white/20 mb-4" />
                            <p className="text-white/80 font-sans leading-relaxed mb-8 min-h-[80px]">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-stayra-gold"
                                />
                                <div>
                                    <h4 className="font-serif text-lg">{testimonial.name}</h4>
                                    <p className="text-xs uppercase tracking-wider text-white/50">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
