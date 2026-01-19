import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isLcggedIn = !!req.auth
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin")
    const isLoginPage = req.nextUrl.pathname.startsWith("/admin/login")

    if (isAdminPage && !isLoginPage && !isLcggedIn) {
        return NextResponse.redirect(new URL("/admin/login", req.nextUrl))
    }

    if (isLoginPage && isLcggedIn) {
        return NextResponse.redirect(new URL("/admin", req.nextUrl))
    }

    return NextResponse.next()
})

export const config = {
    matcher: ["/admin/:path*"],
}
