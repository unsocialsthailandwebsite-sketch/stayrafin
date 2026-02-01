
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
    const faqs = [
        {
            question: "How do I make a reservation?",
            answer: "You can book directly through our website by selecting your desired property and dates. Alternatively, you can contact our concierge team for personalized assistance."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Our cancellation policy varies by property and season. Generally, full refunds are available for cancellations made 30 days prior to arrival. Specific details are provided during the booking process."
        },
        {
            question: "Are pets allowed?",
            answer: "Many of our properties are pet-friendly. Please check the specific amenities of your chosen villa or contact us to confirm before booking."
        },
        {
            question: "What are the check-in and check-out times?",
            answer: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
        },
        {
            question: "Do you offer concierge services?",
            answer: "Yes, all Stayra guests have access to our specialized concierge service to help arrange transportation, dining reservations, local experiences, and more."
        },
        {
            question: "Can I host an event or party?",
            answer: "Events and parties are allowed at select properties with prior approval. Additional fees and terms may apply. Please contact us to discuss your event requirements."
        }
    ];

    return (
        <div className="min-h-screen bg-stayra-ivory flex flex-col">
            <main className="flex-grow pt-32 pb-16 px-4 container mx-auto">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="font-serif text-4xl md:text-5xl text-stayra-green">Frequently Asked Questions</h1>
                        <p className="font-sans text-lg text-stayra-charcoal/80 max-w-xl mx-auto">
                            Everything you need to know about your Stayra experience.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stayra-gold/10">
                        {/* Fallback if Accordion is not available, using simple details/summary or just list */}
                        {/* Since I don't know if Accordion component exists, I will use a simple mapping first to be safe, or check for the component. 
                            Wait, I saw @radix-ui/react-slot in package.json, so likely shadcn ui components exist.
                            But I haven't seen the file structure for components fully.
                            Let's use a safe custom implementation or just standard HTML details/summary styled nicely if I can't verify components.
                            Actually, I'll stick to standard HTML for safety unless I verify `components/ui/accordion`.
                            I'll verify `components/ui` first in a separate step or just risk it? 
                            Better to use standard HTML `details`/`summary` styled with Tailwind to avoid import errors if the component is missing.
                          */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                    <summary className="flex justify-between items-center font-serif text-xl text-stayra-green cursor-pointer list-none py-2 hover:text-stayra-gold transition-colors">
                                        <span>{faq.question}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-stayra-charcoal/80 font-sans mt-3 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
