import { StayraLogo } from "@/components/ui/stayra-logo";

export const metadata = {
    title: "Privacy Policy | Stayra",
    description: "Read the privacy policy of Stayra Hospitality Pvt. Ltd. to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-stayra-ivory pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">

                    <div className="text-center mb-12">
                        <StayraLogo className="h-10 w-auto mx-auto mb-6 opacity-80" />
                        <h1 className="font-serif text-3xl md:text-4xl text-stayra-charcoal mb-4">Privacy Policy</h1>
                        <div className="w-16 h-[1px] bg-stayra-gold mx-auto" />
                    </div>

                    <div className="prose prose-lg text-gray-700 max-w-none prose-headings:font-serif prose-headings:text-stayra-charcoal prose-headings:font-bold prose-strong:text-stayra-charcoal prose-p:leading-relaxed">

                        <p>
                            At Stayra Hospitality Pvt. Ltd. (“Stayra”, “we”, “our”, “us”), we are committed to protecting the privacy and personal information of our guests, website visitors, and users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a booking, or use our services.
                        </p>
                        <p>
                            By accessing or using our services, you agree to the terms of this Privacy Policy.
                        </p>

                        <hr className="my-8 border-gray-100" />

                        <h3 className="font-bold">1. Information We Collect</h3>
                        <p>We may collect the following types of information:</p>

                        <h4 className="font-bold">a. Personal Information</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Full name</li>
                            <li>Contact details (phone number, email address)</li>
                            <li>Government-issued ID details (as required for check-in and legal compliance)</li>
                            <li>Address and billing information</li>
                            <li>Age and nationality (where required by law)</li>
                        </ul>

                        <h4 className="font-bold">b. Booking & Transaction Information</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Reservation details</li>
                            <li>Payment details (processed through secure third-party payment gateways)</li>
                            <li>Security deposit information</li>
                            <li>Communication history with Stayra</li>
                        </ul>

                        <h4 className="font-bold">c. Technical & Usage Information</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>IP address</li>
                            <li>Browser type and device information</li>
                            <li>Website usage data through cookies and analytics tools</li>
                        </ul>

                        <hr className="my-8 border-gray-100" />

                        <h3 className="font-bold">2. How We Use Your Information</h3>
                        <p>We use the collected information to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Process and manage bookings and reservations</li>
                            <li>Verify identity and comply with legal and regulatory requirements</li>
                            <li>Communicate booking confirmations, updates, and support</li>
                            <li>Improve our services, website performance, and guest experience</li>
                            <li>Prevent fraud, misuse, or unauthorized access</li>
                            <li>Send promotional or marketing communication (only if opted in)</li>
                        </ul>

                        <h3 className="font-bold">3. Payment Information</h3>
                        <p>
                            Stayra does <strong>not store or process card or banking details</strong> directly. All payments are securely processed through authorized third-party payment gateways. Stayra shall not be responsible for any breach or misuse of data at the payment gateway level.
                        </p>

                        <h3 className="font-bold">4. Sharing of Information</h3>
                        <p>We may share your information only in the following circumstances:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>With property owners or on-ground teams for operational and compliance purposes</li>
                            <li>With government or legal authorities when required by law</li>
                            <li>With trusted third-party service providers (IT services, payment processors, customer support) strictly for business operations</li>
                            <li>To protect the rights, safety, and property of Stayra, guests, or others</li>
                        </ul>
                        <p>We <strong>do not sell, rent, or trade</strong> your personal information to third parties.</p>

                        <hr className="my-8 border-gray-100" />

                        <h3 className="font-bold">5. Data Security</h3>
                        <p>
                            We implement reasonable administrative, technical, and physical security measures to protect your personal data from unauthorized access, misuse, or disclosure. However, no system is completely secure, and we cannot guarantee absolute security of data transmitted online.
                        </p>

                        <h3 className="font-bold">6. Data Retention</h3>
                        <p>Personal information is retained only for as long as necessary to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Fulfill booking and operational purposes</li>
                            <li>Comply with legal, tax, or regulatory obligations</li>
                            <li>Resolve disputes or enforce agreements</li>
                        </ul>
                        <p>Once no longer required, data is securely deleted or anonymized.</p>

                        <h3 className="font-bold">7. Cookies Policy</h3>
                        <p>
                            Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve functionality. Users can choose to disable cookies through browser settings, though this may affect certain features of the website.
                        </p>

                        <h3 className="font-bold">8. User Rights</h3>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate or incomplete data</li>
                            <li>Request deletion of personal data (subject to legal requirements)</li>
                            <li>Withdraw consent for marketing communications</li>
                        </ul>
                        <p>Requests can be made by contacting us via email.</p>

                        <h3 className="font-bold">9. Third-Party Links</h3>
                        <p>
                            Our website may contain links to third-party websites. Stayra is not responsible for the privacy practices or content of such external websites. Users are advised to review the privacy policies of third-party sites independently.
                        </p>

                        <h3 className="font-bold">10. Children’s Privacy</h3>
                        <p>
                            Stayra does not knowingly collect personal information from individuals under the age of 18 without parental or guardian consent.
                        </p>

                        <h3 className="font-bold">11. Policy Updates</h3>
                        <p>
                            Stayra reserves the right to modify or update this Privacy Policy at any time. Changes will be effective immediately upon posting on the website. Continued use of our services after such updates constitutes acceptance of the revised policy.
                        </p>

                        <hr className="my-8 border-gray-100" />

                        <h3 className="font-bold">12. Contact Us</h3>
                        <p>
                            For any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at:
                        </p>
                        <ul className="list-none pl-0 space-y-1">
                            <li className="flex gap-2"><strong>Email:</strong> <span>bookstayra@gmail.com</span></li>
                            <li className="flex gap-2"><strong>Phone:</strong> <span>+91 73400 31394</span></li>
                        </ul>

                    </div>
                </div>
            </div>
        </main>
    );
}
