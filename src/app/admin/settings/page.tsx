"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Save } from "lucide-react"

export default function SettingsPage() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        contactEmail: "",
        contactPhone: "",
        whatsappNumber: "",
        heroHeading: "",
        heroSubheading: ""
    })

    // Fetch existing settings on load
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch("/api/settings")
                if (res.ok) {
                    const data = await res.json()
                    // If data exists, populate form. If empty (first run), keep defaults.
                    if (data && Object.keys(data).length > 0) {
                        setFormData(prev => ({ ...prev, ...data }))
                    }
                }
            } catch (error) {
                console.error("Failed to load settings", error)
            }
        }
        fetchSettings()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("/api/settings", {
                method: "POST", // Using POST to create or update singleton
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            if (!res.ok) throw new Error("Failed to save")
            alert("Settings saved successfully!")
        } catch (error) {
            console.error(error)
            alert("Error saving settings")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Site Configuration</h2>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8">

                {/* General Info */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 border-b pb-2">General Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
                            <input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold"
                                placeholder="Stayra Luxury Rentals"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 border-b pb-2">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Official Email</label>
                            <input
                                name="contactEmail"
                                type="email"
                                value={formData.contactEmail}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold"
                                placeholder="hello@stayra.in"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Display)</label>
                            <input
                                name="contactPhone"
                                value={formData.contactPhone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold"
                                placeholder="+91 73400 31394"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number (No spaces)</label>
                            <input
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold"
                                placeholder="917340031394"
                            />
                        </div>
                    </div>
                </div>

                {/* Homepage Content */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 border-b pb-2">Homepage Hero Section</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Main Heading</label>
                            <input
                                name="heroHeading"
                                value={formData.heroHeading}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold"
                                placeholder="e.g. Experience Jaipur's Finest Villas"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subheading</label>
                            <input
                                name="heroSubheading"
                                value={formData.heroSubheading}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stayra-gold"
                                placeholder="e.g. Where heritage meets modern luxury"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button type="submit" disabled={loading} className="bg-stayra-charcoal text-white px-8 flex items-center gap-2">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {loading ? "Saving..." : "Save Settings"}
                    </Button>
                </div>
            </form>
        </div>
    )
}
