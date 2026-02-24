import { NextResponse } from "next/server"
import { client } from "@/sanity/client"
import { auth } from "@/auth"

export const runtime = "edge"

export async function POST(req: Request) {
    const session = await auth()
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const body = await req.json()
        const { title, location, type, price, description, specs } = body

        // Create document in Sanity
        const doc = {
            _type: 'property',
            title,
            location,
            type,
            price,
            description,
            specs,
            // Generate slug from title
            slug: {
                _type: 'slug',
                current: title.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
            }
        }

        const result = await client.create(doc)
        return NextResponse.json(result)
    } catch (error) {
        console.error("Error creating property:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

export async function GET() {
    try {
        const properties = await client.fetch(`*[_type == "property"]{
            _id,
            title,
            location,
            type,
            price
        }`)
        return NextResponse.json(properties)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
    }
}
