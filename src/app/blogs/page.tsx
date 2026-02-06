import { blogPosts } from "@/data/blog-data";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Stayra Blogs | Travel Stories & Tips",
    description: "Read our latest stories about Jaipur, travel tips, farm stays, and heritage experiences.",
};

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-stayra-ivory pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-4">
                        Stayra Stories
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of travel guides, local insights, and stories from the heart of Rajasthan.
                    </p>
                    <div className="w-24 h-[1px] bg-stayra-gold mx-auto mt-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                        >
                            <Link href={`/blogs/${post.slug}`} className="relative h-64 overflow-hidden group">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 uppercase tracking-wider">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <span>{post.tags[0]}</span>
                                </div>

                                <Link href={`/blogs/${post.slug}`}>
                                    <h2 className="font-serif text-xl text-stayra-charcoal mb-3 hover:text-stayra-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                </Link>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                        <User className="w-3 h-3" />
                                        {post.author}
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-stayra-gold hover:text-stayra-green p-0 h-auto font-medium" asChild>
                                        <Link href={`/blogs/${post.slug}`} className="flex items-center gap-1">
                                            Read More <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
