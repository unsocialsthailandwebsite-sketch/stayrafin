"use client"

import { useState } from "react"


import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronLeft, Save } from "lucide-react"
import Link from "next/link"

export default function NewPropertyPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    // Basic form state for MVP
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        price: "",
        type: "heritage", // Default
        description: "",
        specs: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Todo: Upload images first, then submit data with image IDs
        // For now, submitting text data to API
        try {
            const res = await fetch("/api/properties", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                router.push("/admin/properties")
            } else {
                alert("Failed to create property")
            }
        } catch (error) {
            console.error(error)
            alert("Error creating property")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/properties" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ChevronLeft className="w-5 h-5 text-gray-500" />
                    </Link>
                    <h2 className="text-2xl font-serif font-bold text-gray-800">Add New Property</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8">
                {/* Basic Info */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
                            <input name="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold" placeholder="e.g. Royal Haveli" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                            <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold bg-white">
                                <option value="heritage">Heritage Luxury</option>
                                <option value="modern">Modern Farmhouse</option>
                                <option value="villa">Villa</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input name="location" required value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold" placeholder="e.g. Jaipur" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price per Night</label>
                            <input name="price" required value={formData.price} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold" placeholder="e.g. ₹35,000" />
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 border-b pb-2">Details & Description</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Specs (Guests/Bedrooms)</label>
                        <input name="specs" value={formData.specs} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold" placeholder="e.g. 4 Bedrooms | Sleeps 8" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea name="description" required value={formData.description} onChange={handleChange} rows={6} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold" placeholder="Describe the property..." />
                    </div>
                </div>

                {/* Images Placeholder */}
                <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                    <p>Image uploading will be enabled in the next update.</p>
                </div>

                <div className="flex justify-end pt-4">
                    <Button type="submit" disabled={loading} className="bg-stayra-charcoal text-white px-8">
                        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                        {loading ? "Saving..." : "Create Property"}
                    </Button>
                </div>
            </form>
        </div>
    )
}
