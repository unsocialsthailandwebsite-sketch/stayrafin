"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Aditi & Rohan Mehta",
        location: "New Delhi",
        rating: 5,
        text: "A perfect weekend escape from the city. The villa's architecture is stunning, and the private pool was the highlight of our stay. The staff made us feel like royalty.",
        image: "https://images.unsplash.com/photo-1623091410901-00e2d5b4396e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Arjun Singh",
        location: "Mumbai",
        rating: 5,
        text: "Incredible hospitality! We hosted a small family reunion here, and everything was flawless. The Rajasthani meals prepared by the chef were absolutely delicious.",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Meera Reddy",
        location: "Bangalore",
        rating: 5,
        text: "Stayra offers a level of privacy and luxury that is hard to find. Waking up to the view of the Aravallis was magical. We will definitely be coming back.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
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
