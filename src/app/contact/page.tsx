import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-stayra-ivory flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-16 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="font-serif text-5xl md:text-6xl text-stayra-green">Contact Us</h1>
                    <p className="font-sans text-lg text-stayra-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                        Ready to plan your escape? Our concierge team is here to assist you in curating the perfect getaway.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-12 text-left bg-white p-8 rounded-2xl shadow-sm border border-stayra-gold/20">
                        <div>
                            <h3 className="font-serif text-xl text-stayra-green mb-2">General Inquiries</h3>
                            <p className="text-stayra-charcoal/70">hello@stayra.in</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-stayra-green mb-2">Concierge</h3>
                            <p className="text-stayra-charcoal/70">+91 987 654 3210</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
