"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle } from "lucide-react"

export function FloatingCTA({ propertyName, whatsapp, phone }: { propertyName: string, whatsapp: string, phone: string }) {
    const [openForm, setOpenForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            property: propertyName,
            message: `Booking inquiry for ${propertyName}`
        }

        try {
            const res = await fetch("/api/inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            if (res.ok) {
                setSuccess(true)
                setTimeout(() => {
                    setOpenForm(false)
                    setSuccess(false)
                }, 3000)
            }
        } catch (error) {
            console.error("Submission failed", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-stayra-gold/10 sticky top-24">
            <div className="text-center mb-6">
                <h3 className="font-serif text-xl text-stayra-charcoal mb-2">Ready to Experience?</h3>
                <p className="text-sm text-gray-500">
                    Direct booking with our concierge.<br />No hidden fees.
                </p>
            </div>

            {!openForm ? (
                <div className="space-y-3">
                    <Button
                        onClick={() => setOpenForm(true)}
                        className="w-full bg-stayra-charcoal text-white hover:bg-black"
                    >
                        Request Booking
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full border-stayra-charcoal text-stayra-charcoal"
                        onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank')}
                    >
                        JavaScript WhatsApp
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full text-xs text-gray-400"
                        onClick={() => window.open('/brochure.pdf', '_blank')}
                    >
                        Download Catalogue
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3 animate-in fade-in slide-in-from-bottom-4">
                    {success ? (
                        <div className="text-center py-8 text-green-600">
                            <CheckCircle className="w-12 h-12 mx-auto mb-2" />
                            <p className="font-medium">Inquiry Sent!</p>
                            <p className="text-xs text-gray-500">We'll contact you shortly.</p>
                        </div>
                    ) : (
                        <>
                            <input name="name" required placeholder="Your Name" className="w-full px-3 py-2 border rounded text-sm" />
                            <input name="email" type="email" required placeholder="Email Address" className="w-full px-3 py-2 border rounded text-sm" />
                            <input name="phone" required placeholder="Phone Number" className="w-full px-3 py-2 border rounded text-sm" />
                            <div className="flex gap-2">
                                <Button type="button" variant="ghost" onClick={() => setOpenForm(false)} className="flex-1 text-xs">Cancel</Button>
                                <Button type="submit" disabled={loading} className="flex-1 bg-stayra-charcoal text-white text-xs">
                                    {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Submit Request"}
                                </Button>
                            </div>
                        </>
                    )}
                </form>
            )}

            <div className="mt-4 text-center">
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                    ● Typical response: &lt; 2 hours
                </span>
            </div>
        </div>
    );
}
