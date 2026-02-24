import { NextResponse } from "next/server"
import { client } from "@/sanity/client"
import { auth } from "@/auth"

export const runtime = "edge"

// Singleton ID for settings
const SETTINGS_ID = "siteSettings"

export async function GET() {
    try {
        const settings = await client.fetch(`*[_type == "siteSettings"][0]`)
        return NextResponse.json(settings || {})
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const body = await req.json()

        // Use createOrReplace to enforce singleton
        const result = await client.createOrReplace({
            ...body,
            _id: SETTINGS_ID,
            _type: 'siteSettings'
        })

        return NextResponse.json(result)
    } catch (error) {
        console.error("Error saving settings:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
