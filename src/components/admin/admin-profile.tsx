"use client"

import { useSession } from "next-auth/react"
import { LogOut } from "lucide-react"
import Link from "next/link"

export function AdminProfile() {
    const { data: session } = useSession()

    if (!session) return null

    return (
        <div className="p-4 border-t">
            <div className="flex items-center gap-3 px-4 py-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-stayra-gold text-white flex items-center justify-center font-bold">
                    {session.user?.name?.[0] || "A"}
                </div>
                <div className="overflow-hidden">
                    <p className="text-sm font-bold truncate text-stayra-charcoal">{session.user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                </div>
            </div>
            <Link href="/api/auth/signout" className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors text-sm w-full">
                <LogOut className="w-4 h-4" />
                Sign Out
            </Link>
        </div>
    )
}
