"use client"

import { useState } from "react"
import { Star, Trash2, Plus } from "lucide-react"

// Mock data until API is connected
const initialTestimonials = [
    { id: 1, name: "Priya Sharma", location: "New Delhi", rating: 5, text: "Absolutely stunning property. The staff was incredible.", featured: true },
    { id: 2, name: "John Doe", location: "London, UK", rating: 4, text: "Great experience, but the wifi was a bit spotty in the garden.", featured: false },
]

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState(initialTestimonials)

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif font-bold text-gray-800">Guest Reviews</h2>
                <button className="bg-stayra-charcoal text-white px-4 py-2 rounded-lg hover:bg-black transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Review
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative group">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-stayra-charcoal">{review.name}</h3>
                                <p className="text-xs text-gray-500">{review.location}</p>
                            </div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? "text-stayra-gold fill-stayra-gold" : "text-gray-200"}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm italic mb-4">"{review.text}"</p>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${review.featured ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                <span className="text-xs text-gray-500">{review.featured ? 'Featured on Home' : 'Standard'}</span>
                            </div>
                            <button className="text-red-400 hover:text-red-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
