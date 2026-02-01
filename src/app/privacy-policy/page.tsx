
export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-stayra-ivory flex flex-col">
            <main className="flex-grow pt-32 pb-16 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="font-serif text-4xl md:text-5xl text-stayra-green">Privacy Policy</h1>
                        <p className="font-sans text-lg text-stayra-charcoal/80">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stayra-gold/10 font-sans text-stayra-charcoal/90 space-y-8">
                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl text-stayra-green">1. Introduction</h2>
                            <p className="leading-relaxed">
                                Welcome to Stayra. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl text-stayra-green">2. Data We Collect</h2>
                            <p className="leading-relaxed">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-stayra-gold">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
                                <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl text-stayra-green">3. How We Use Your Data</h2>
                            <p className="leading-relaxed">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-stayra-gold">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl text-stayra-green">4. Data Security</h2>
                            <p className="leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                                In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl text-stayra-green">5. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                <br />
                                <strong>Email:</strong> contact@stayra.in
                                <br />
                                <strong>Phone:</strong> +91 98765 43210
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
