import Link from "next/link"
import { Plus, Pencil, Trash2 } from "lucide-react"

// Mock data until Sanity connection is fully live with data
const properties = [
    { id: "1", title: "Choti Haveli", location: "C-Scheme, Jaipur", type: "Heritage Luxury" },
    { id: "2", title: "The Kukas Villa", location: "Jaipur Outskirts", type: "Modern Farmhouse" }
]

export default function AdminPropertiesPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif font-bold text-gray-800">Properties</h2>
                <Link
                    href="/admin/properties/new"
                    className="bg-stayra-charcoal text-white px-4 py-2 rounded-lg hover:bg-black transition-colors flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Add New Property
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500 uppercase tracking-wider text-xs">Property</th>
                            <th className="px-6 py-4 font-medium text-gray-500 uppercase tracking-wider text-xs">Type</th>
                            <th className="px-6 py-4 font-medium text-gray-500 uppercase tracking-wider text-xs">Location</th>
                            <th className="px-6 py-4 font-medium text-gray-500 uppercase tracking-wider text-xs text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {properties.map((prop) => (
                            <tr key={prop.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-stayra-charcoal">{prop.title}</td>
                                <td className="px-6 py-4 text-gray-600">{prop.type}</td>
                                <td className="px-6 py-4 text-gray-600">{prop.location}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-gray-400 hover:text-stayra-gold transition-colors">
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {properties.length === 0 && (
                    <div className="p-12 text-center text-gray-400">
                        No properties found. Click "Add New Property" to get started.
                    </div>
                )}
            </div>
        </div>
    )
}
