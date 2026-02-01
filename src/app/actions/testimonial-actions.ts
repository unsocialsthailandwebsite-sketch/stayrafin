"use server";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "@/sanity/env";
import { revalidatePath } from "next/cache";

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token, // Ensure this token has write permissions in .env
    useCdn: false,
});

export async function getTestimonials() {
    const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    location,
    rating,
    text,
    isFeatured
  }`;
    return await client.fetch(query);
}

export async function createTestimonial(data: any) {
    try {
        const doc = {
            _type: "testimonial",
            name: data.name,
            location: data.location,
            rating: Number(data.rating),
            text: data.text,
            isFeatured: data.isFeatured || false,
        };
        await client.create(doc);
        revalidatePath("/admin/testimonials");
        return { success: true };
    } catch (error) {
        console.error("Failed to create testimonial:", error);
        return { success: false, error };
    }
}

export async function deleteTestimonial(id: string) {
    try {
        await client.delete(id);
        revalidatePath("/admin/testimonials");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete testimonial:", error);
        return { success: false, error };
    }
}

export async function toggleFeaturedTestimonial(id: string, currentStatus: boolean) {
    try {
        await client.patch(id).set({ isFeatured: !currentStatus }).commit();
        revalidatePath("/admin/testimonials");
        return { success: true };
    } catch (error) {
        console.error("Failed to toggle feature status:", error);
        return { success: false, error };
    }
}
