
import { Camera, Heart, Lightbulb, Mail, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Collaborate With Us | Stayra",
    description: "Join the Stayra community of creators and tastemakers.",
};

export default function CollaboratePage() {
    const categories = [
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Content Creators",
            description: "Photographers, videographers, and storytellers. If you have an eye for aesthetics and a passion for travel, we want to see the world through your lens.",
            perks: ["Complimentary stays", "Platform features", "Paid commissions"]
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Influencers",
            description: "Digital tastemakers with an engaged audience. Share the Stayra experience with your community and inspire their next getaway.",
            perks: ["Exclusive access", "Affiliate programs", "Co-hosted events"]
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Brand Partners",
            description: "Luxury brands, event curators, and experience providers. Let's co-create unforgettable moments for our guests through strategic alignment.",
            perks: ["Product placement", "Cross-promotion", "Event venues"]
        }
    ];

    return (
        <div className="min-h-screen bg-stayra-ivory pt-32 pb-24">
            {/* Hero Section */}
            <div className="container mx-auto px-4 max-w-4xl text-center mb-20 space-y-6">
                <span className="text-stayra-gold uppercase tracking-[0.2em] text-sm font-medium">Community & Culture</span>
                <h1 className="font-serif text-5xl md:text-7xl text-stayra-green leading-tight">
                    Create Beauty <br />
                    <span className="italic font-light opacity-80">Together</span>
                </h1>
                <p className="font-sans text-lg md:text-xl text-stayra-charcoal/70 leading-relaxed max-w-2xl mx-auto">
                    We believe in the power of collaboration. Whether you're an artist, a brand, or a storyteller, let's combine our visions to craft something extraordinary.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="container mx-auto px-4 max-w-6xl mb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-stayra-gold/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="text-stayra-gold mb-6">{cat.icon}</div>
                            <h3 className="font-serif text-2xl text-stayra-green mb-4">{cat.title}</h3>
                            <p className="text-stayra-charcoal/70 mb-6 leading-relaxed text-sm h-20">
                                {cat.description}
                            </p>
                            <div className="space-y-3 pt-6 border-t border-gray-100">
                                <span className="text-xs font-bold uppercase tracking-wider text-stayra-green block mb-2">What's in it for you:</span>
                                {cat.perks.map((perk, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-stayra-charcoal/60">
                                        <Heart className="w-3 h-3 text-stayra-gold" />
                                        <span>{perk}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vision Section */}
            <div className="bg-stayra-green text-white py-24 mb-24 overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-3xl">
                    <h2 className="font-serif text-3xl md:text-5xl">Our Collaborative Philosophy</h2>
                    <p className="text-white/80 text-lg leading-relaxed">
                        "Stayra is more than a place to stay; it's a feeling. We look for partners who understand the language of luxury, the rhythm of nature, and the art of hospitality. If your work speaks this language, we are already connected."
                    </p>
                </div>
                {/* Abstract background elements */}
                <div className="absolute top-10 left-10 text-white/5 rotate-12">
                    <Star className="w-64 h-64" />
                </div>
                <div className="absolute bottom-10 right-10 text-white/5 -rotate-12">
                    <MessageCircle className="w-56 h-56" />
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 max-w-xl text-center">
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl text-stayra-green">Let's Start a Conversation</h2>
                    <p className="text-stayra-charcoal/70">
                        Have an idea? We'd love to hear it. Reach out to our brand team directly via WhatsApp or email.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/917340031394?text=Hi%2C%20I%20want%20to%20collaborate%20with%20Stayra" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full sm:w-auto bg-stayra-green text-white hover:bg-stayra-green/90 px-8 py-6 rounded-full text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Chat on WhatsApp
                            </Button>
                        </a>
                        <a href="mailto:bookstayra@gmail.com">
                            <Button variant="outline" className="w-full sm:w-auto border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white px-8 py-6 rounded-full text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email Proposal
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
