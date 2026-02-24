import { NextResponse } from "next/server"
import { client } from "@/sanity/client"
import { auth } from "@/auth"

export const runtime = "edge"

// POST: Public endpoint for submitting inquiries
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, phone, message, property } = body

        // Basic validation
        if (!name || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const doc = {
            _type: 'inquiry',
            name,
            email,
            phone,
            message,
            property: property || "General Inquiry",
            status: 'new',
            createdAt: new Date().toISOString()
        }

        const result = await client.create(doc)
        return NextResponse.json({ success: true, id: result._id })
    } catch (error) {
        console.error("Error submitting inquiry:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

// GET: Admin only endpoint to fetch inquiries
export async function GET() {
    const session = await auth()
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const inquiries = await client.fetch(`*[_type == "inquiry"] | order(createdAt desc) {
            _id,
            name,
            email,
            phone,
            property,
            message,
            status,
            createdAt
        }`)
        return NextResponse.json(inquiries)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
    }
}
