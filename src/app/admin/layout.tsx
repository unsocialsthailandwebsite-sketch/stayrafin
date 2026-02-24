import { Users, Building2, MessageSquare, Settings, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { AdminProfile } from "@/components/admin/admin-profile"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
        { icon: Building2, label: "Properties", href: "/admin/properties" },
        { icon: MessageSquare, label: "Inquiries", href: "/admin/inquiries" },
        { icon: Users, label: "Testimonials", href: "/admin/testimonials" },
        { icon: Settings, label: "Settings", href: "/admin/settings" },
    ]

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex flex-col">
                <div className="p-6 border-b flex items-center justify-center">
                    <h1 className="font-serif text-2xl text-stayra-charcoal font-bold">Stayra Admin</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-stayra-gold/10 hover:text-stayra-gold rounded-lg transition-colors font-medium"
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <AdminProfile />
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
