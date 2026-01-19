import { auth } from "@/auth"
import { Users, Building2, MessageSquare, Settings, LogOut, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    if (!session) {
        redirect("/admin/login")
    }

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

                <div className="p-4 border-t">
                    <div className="flex items-center gap-3 px-4 py-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-stayra-gold text-white flex items-center justify-center font-bold">
                            A
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold truncate text-stayra-charcoal">{session.user?.name}</p>
                            <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                        </div>
                    </div>
                    <form action={async () => {
                        "use server"
                        // Import 'signOut' dynamically or via server action file to avoid build issues
                        // For now, simpler link or client component
                    }}>
                        <Link href="/api/auth/signout" className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors text-sm w-full">
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </Link>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
