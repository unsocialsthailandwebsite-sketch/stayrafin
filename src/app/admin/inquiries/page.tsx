"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns" // You might need to install date-fns or use native Intl
import { Mail, Phone, Calendar, Loader2 } from "lucide-react"

interface Inquiry {
    _id: string
    name: string
    email: string
    phone: string
    property: string
    message: string
    status: string
    createdAt: string
}

export default function InquiriesPage() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const res = await fetch("/api/inquiries")
                if (res.ok) {
                    const data = await res.json()
                    setInquiries(data)
                }
            } catch (error) {
                console.error("Failed to load inquiries")
            } finally {
                setLoading(false)
            }
        }
        fetchInquiries()
    }, [])

    if (loading) {
        return <div className="flex items-center justify-center p-12"><Loader2 className="animate-spin text-stayra-gold w-8 h-8" /></div>
    }

    return (
        <div>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Booking Inquiries</h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {inquiries.length === 0 ? (
                    <div className="p-12 text-center text-gray-400">
                        No inquiries received yet.
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {inquiries.map((inquiry) => (
                            <div key={inquiry._id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-bold text-stayra-charcoal">{inquiry.name}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${inquiry.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {inquiry.status.toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(inquiry.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="text-sm text-stayra-gold font-medium mb-3">
                                    Interested in: {inquiry.property}
                                </div>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed bg-gray-50 p-3 rounded-lg">
                                    "{inquiry.message}"
                                </p>
                                <div className="flex gap-4 text-sm text-gray-500">
                                    <a href={`mailto:${inquiry.email}`} className="flex items-center gap-2 hover:text-stayra-charcoal">
                                        <Mail className="w-4 h-4" /> {inquiry.email}
                                    </a>
                                    {inquiry.phone && (
                                        <a href={`tel:${inquiry.phone}`} className="flex items-center gap-2 hover:text-stayra-charcoal">
                                            <Phone className="w-4 h-4" /> {inquiry.phone}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
