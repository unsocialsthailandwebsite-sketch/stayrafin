"use client"

import { useState, useEffect } from "react"


import { Star, Trash2, Plus, Loader2 } from "lucide-react"
import {
    getTestimonials,
    createTestimonial,
    deleteTestimonial,
    toggleFeaturedTestimonial
} from "@/app/actions/testimonial-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { toast } from "sonner" // Assuming Sonner or similar toast is available, if not usually console or simple alert

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [newReview, setNewReview] = useState({ name: "", location: "", rating: 5, text: "", isFeatured: false })
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Fetch Data
    const fetchReviews = async () => {
        setIsLoading(true)
        try {
            const data = await getTestimonials()
            setTestimonials(data)
        } catch (error) {
            console.error("Failed to fetch reviews", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    // Handlers
    const handleCreate = async () => {
        setIsSubmitting(true)
        const res = await createTestimonial(newReview)
        if (res.success) {
            setNewReview({ name: "", location: "", rating: 5, text: "", isFeatured: false })
            setIsDialogOpen(false)
            fetchReviews() // Refresh list
        } else {
            alert("Failed to create review")
        }
        setIsSubmitting(false)
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this review?")) return
        const res = await deleteTestimonial(id)
        if (res.success) {
            fetchReviews()
        } else {
            alert("Failed to delete review")
        }
    }

    const handleToggleFeatured = async (id: string, currentStatus: boolean) => {
        const res = await toggleFeaturedTestimonial(id, currentStatus)
        if (res.success) {
            fetchReviews()
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif font-bold text-gray-800">Guest Reviews</h2>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-stayra-charcoal text-white gap-2">
                            <Plus className="w-4 h-4" /> Add Review
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Guest Review</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="grid gap-2">
                                <Label>Guest Name</Label>
                                <Input
                                    value={newReview.name}
                                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                    placeholder="e.g. Priya Sharma"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Location</Label>
                                <Input
                                    value={newReview.location}
                                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                                    placeholder="e.g. New Delhi"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Rating (1-5)</Label>
                                <Input
                                    type="number"
                                    min={1}
                                    max={5}
                                    value={newReview.rating}
                                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Review Text</Label>
                                <Textarea
                                    value={newReview.text}
                                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                    placeholder="Enter review..."
                                />
                            </div>
                            <Button onClick={handleCreate} disabled={isSubmitting} className="w-full bg-stayra-charcoal">
                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Review"}
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            {isLoading ? (
                <div className="text-center py-12 text-gray-400">Loading reviews...</div>
            ) : testimonials.length === 0 ? (
                <div className="text-center py-12 text-gray-400 border border-dashed rounded-xl">No reviews found. Add one to get started!</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((review) => (
                        <div key={review._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative group transition-all hover:shadow-md">
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
                            <p className="text-gray-600 text-sm italic mb-4 min-h-[60px]">"{review.text}"</p>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                                <button
                                    onClick={() => handleToggleFeatured(review._id, review.isFeatured)}
                                    className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                                >
                                    <span className={`w-2 h-2 rounded-full ${review.isFeatured ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                    <span className="text-xs text-gray-500">{review.isFeatured ? 'Featured on Home' : 'Standard'}</span>
                                </button>
                                <button
                                    onClick={() => handleDelete(review._id)}
                                    className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-all"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
