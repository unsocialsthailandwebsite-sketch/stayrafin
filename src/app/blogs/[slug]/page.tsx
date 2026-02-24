export const runtime = "edge"

import { blogPosts } from "@/data/blog-data";

import { notFound } from "next/navigation";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Stayra Blogs`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-stayra-ivory pt-24 pb-16">
            <article className="container mx-auto px-4 max-w-4xl">
                <Link href="/blogs" className="inline-flex items-center text-sm text-gray-500 hover:text-stayra-gold mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blogs
                </Link>

                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                            <User className="w-3 h-3" />
                            {post.author}
                        </span>
                    </div>

                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stayra-charcoal leading-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg mb-10">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div
                    className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-stayra-charcoal prose-p:text-gray-700 prose-a:text-stayra-gold hover:prose-a:text-stayra-green prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="flex items-center gap-1 text-sm bg-white text-stayra-charcoal px-3 py-1.5 rounded-md border border-gray-200">
                                <Tag className="w-3 h-3 text-stayra-gold" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
}
