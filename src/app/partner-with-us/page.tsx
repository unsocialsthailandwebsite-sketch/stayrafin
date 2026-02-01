
import { Check, ArrowRight, Building, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Partner With Us | Stayra",
    description: "Unlock the true potential of your property with Stayra.",
};

export default function PartnerPage() {
    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Maximize Revenue",
            description: "Our dynamic pricing and premium positioning ensure you get the best yield for your property."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Complete Care",
            description: "From maintenance to guest relations, we handle everything with white-glove attention to detail."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Vetted Guests",
            description: "We host a curated community of discerning travelers who respect and appreciate luxury."
        },
        {
            icon: <Building className="w-6 h-6" />,
            title: "Brand Elevation",
            description: "We showcase your property as a unique destination, not just another rental listing."
        }
    ];

    return (
        <div className="min-h-screen bg-stayra-ivory pt-32 pb-24">
            {/* Hero Section */}
            <div className="container mx-auto px-4 max-w-5xl text-center mb-20 space-y-6">
                <span className="text-stayra-gold uppercase tracking-[0.2em] text-sm font-medium">For Property Owners</span>
                <h1 className="font-serif text-5xl md:text-7xl text-stayra-green leading-tight">
                    Steward Your Legacy <br />
                    <span className="italic font-light opacity-80">With Stayra</span>
                </h1>
                <p className="font-sans text-lg md:text-xl text-stayra-charcoal/70 leading-relaxed max-w-2xl mx-auto">
                    Transform your villa into a coveted sanctuary. We partner with exceptional homeowners to create unparalleled hospitality experiences.
                </p>
                <div className="pt-8">
                    <a href="https://wa.me/917340031394?text=Hi%2C%20I%20am%20interested%20in%20partnering%20with%20Stayra%20to%20unlock%20my%20property's%20potential" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-stayra-green text-white hover:bg-stayra-green/90 px-8 py-6 rounded-full text-sm uppercase tracking-widest font-bold">
                            List Your Property
                        </Button>
                    </a>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="bg-white py-20 border-y border-stayra-gold/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="space-y-4 text-center md:text-left group">
                                <div className="w-12 h-12 bg-stayra-ivory rounded-full flex items-center justify-center text-stayra-gold group-hover:bg-stayra-green group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-serif text-xl text-stayra-green">{benefit.title}</h3>
                                <p className="text-stayra-charcoal/60 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selection Criteria */}
            <div className="container mx-auto px-4 py-24 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="font-serif text-4xl text-stayra-green">What We Look For</h2>
                        <p className="text-stayra-charcoal/70 leading-relaxed">
                            Stayra is not for everyone. We carefully select properties that align with our philosophy of purposeful luxury and immersion in nature.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Unique architectural character and design aesthetics",
                                "Prime locations offering privacy and natural beauty",
                                "High-end amenities including pools, lawns, or specialized facilities",
                                "Commitment to maintaining exceptional standards"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-stayra-charcoal/80">
                                    <Check className="w-5 h-5 text-stayra-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-stayra-green/5 p-8 md:p-12 rounded-3xl border border-stayra-green/10">
                        <h3 className="font-serif text-2xl text-stayra-green mb-6">Simple Onboarding Process</h3>
                        <div className="space-y-8">
                            {[
                                { step: "01", title: "Application", desc: "Submit your property details for our curated review." },
                                { step: "02", title: "Site Visit", desc: "Our team evaluates the potential and specific needs of your home." },
                                { step: "03", title: "Transformation", desc: "We style, photograph, and onboard your property to Stayra standards." },
                                { step: "04", title: "Live Listing", desc: "Your property goes live to our exclusive network of guests." }
                            ].map((s, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="font-serif text-stayra-gold/50 text-2xl font-bold">{s.step}</span>
                                    <div>
                                        <h4 className="font-medium text-stayra-charcoal">{s.title}</h4>
                                        <p className="text-sm text-stayra-charcoal/60">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 text-center pb-12">
                <div className="bg-stayra-green text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                        <h2 className="font-serif text-3xl md:text-5xl">Ready to Elevate Your Property?</h2>
                        <p className="text-white/80 max-w-xl mx-auto text-lg">
                            Join our portfolio of exclusive homes. Use the link below to reach out to our partnerships team directly.
                        </p>
                        <a href="https://wa.me/917340031394?text=Hi%2C%20I%20am%20interested%20in%20partnering%20with%20Stayra%20to%20unlock%20my%20property's%20potential" target="_blank" rel="noopener noreferrer" className="inline-block pt-4">
                            <Button className="bg-white text-stayra-green hover:bg-gray-100 px-8 py-6 rounded-full text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                </div>
            </div>
        </div>
    );
}
