import { StayraLogo } from "@/components/ui/stayra-logo";

export const metadata = {
    title: "Terms & Conditions | Stayra",
    description: "Read the terms and conditions for booking and staying with Stayra Hospitality Pvt. Ltd.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-stayra-ivory pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">

                    <div className="text-center mb-12">
                        <StayraLogo className="h-10 w-auto mx-auto mb-6 opacity-80" />
                        <h1 className="font-serif text-3xl md:text-4xl text-stayra-charcoal mb-4">Terms & Conditions</h1>
                        <div className="w-16 h-[1px] bg-stayra-gold mx-auto" />
                    </div>

                    <div className="prose prose-lg text-gray-700 max-w-none prose-headings:font-serif prose-headings:text-stayra-charcoal prose-headings:font-bold prose-strong:text-stayra-charcoal prose-p:leading-relaxed">

                        <h3 className="font-bold">1. Role of Stayra</h3>
                        <p>
                            Stayra Hospitality Pvt. Ltd. manages and operates the listed properties on behalf of their respective owners. Stayra is responsible for reservation management, guest coordination, and on-ground operational services during the stay. Ownership of the property remains with the respective property owner.
                        </p>
                        <p>
                            Any concerns or issues faced by guests after check-in must be reported immediately to the local Stayra representative. Guests may also contact Stayra during office hours or via email for support and assistance.
                        </p>

                        <hr className="my-8 border-gray-100" />

                        <h3 className="font-bold">2. Utilities & Force Majeure</h3>
                        <p>
                            Stayra and/or the property owner shall not be held responsible for any interruption, shortage, or failure of utilities including electricity, water supply, internet, or gas, or for any inconvenience caused due to acts of God, natural calamities, government restrictions, or major mechanical or electrical breakdowns beyond reasonable control. No refunds shall be applicable in such cases.
                        </p>

                        <h3 className="font-bold">3. Use of Property & Amenities</h3>
                        <p>
                            Guests may use all amenities and facilities at the property at their own risk and responsibility. Any damage, loss, or misuse of the property, furnishings, appliances, or amenities during the stay shall be chargeable to the guest.
                        </p>

                        <h3 className="font-bold">4. Cancellation Policy</h3>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border border-gray-200 px-4 py-2 font-semibold">Time Before Travel</th>
                                        <th className="border border-gray-200 px-4 py-2 font-semibold">Cancellation Charges</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2">Within 15 days</td>
                                        <td className="border border-gray-200 px-4 py-2">Non-Refundable</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2">15 – 30 days</td>
                                        <td className="border border-gray-200 px-4 py-2">50% of total booking amount</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2">More than 30 days</td>
                                        <td className="border border-gray-200 px-4 py-2">25% of total booking amount</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="font-bold">Important Notes</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>No refunds are applicable for Peak Season or Blackout Dates.</li>
                            <li>Refunds for payments made in international currencies are subject to the prevailing exchange rate at the time of processing.</li>
                            <li>Refunds or credits are applicable only if 100% payment has been received as per booking policy.</li>
                            <li>No refund or credit shall be applicable in case of partial payments.</li>
                            <li>The security deposit will be fully refunded if the booking is cancelled prior to check-in.</li>
                            <li>All cancellations or modifications must be communicated via email only to be considered valid.</li>
                        </ul>

                        <hr className="my-8 border-gray-100" />

                        <h3 className="font-bold">5. Taxes</h3>
                        <p>
                            All prices displayed on the Stayra website are exclusive of taxes and attract 18% GST as applicable.
                        </p>

                        <h3 className="font-bold">6. Security Deposit</h3>
                        <p>
                            A refundable security deposit will be collected at the time of check-in and refunded within 72 hours after check-out, subject to inspection and confirmation of no damages.
                        </p>
                        <p>
                            Any damage to the property, furniture, appliances, or amenities will be deducted from the security deposit. If damages exceed the deposited amount, guests shall be liable to pay the balance.
                        </p>

                        <h3 className="font-bold">7. Right of Admission & Occupancy</h3>
                        <p>
                            Right of admission is strictly reserved by Stayra and/or the property owner.
                        </p>
                        <p>
                            The number of occupants must strictly comply with the confirmed booking. Exceeding the permitted occupancy may result in denial of stay without refund.
                        </p>

                        <h3 className="font-bold">8. Guest Conduct & House Rules</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Guests must maintain decorum and ensure no nuisance or disturbance is caused to neighbours.</li>
                            <li>Loud music, especially near the pool, is prohibited after 10:00 PM.</li>
                            <li>Smoking and possession or consumption of narcotic or illegal substances is strictly prohibited. Any violation will result in immediate termination of stay and may invite legal action.</li>
                            <li>Contaminating the swimming pool in any manner will attract a minimum penalty of ₹15,000.</li>
                            <li>House parties, events, receptions, birthday parties, or any gatherings not pre-approved by Stayra will attract penalties.</li>
                            <li>Alcohol consumption is permitted only for guests aged 21 years and above, in accordance with applicable laws.</li>
                        </ul>

                        <h3 className="font-bold">9. Pets</h3>
                        <p>
                            Pets are allowed only with prior approval and applicable pet charges. Guests are fully responsible for their pets. Any damage caused to the property, furniture, or furnishings by pets shall be charged accordingly.
                        </p>

                        <hr className="my-8 border-gray-100" />

                        <h3 className="font-bold">10. Check-in & Check-out Policy</h3>
                        <p><strong>Check-in Time:</strong> 1:00 PM</p>
                        <p><strong>Check-out Time:</strong> 11:00 AM</p>

                        <h4 className="font-bold">Late Check-out Penalties</h4>
                        <ul className="list-none pl-0 space-y-1 text-sm bg-gray-50 p-4 rounded-md inline-block min-w-[200px]">
                            <li className="flex justify-between"><span>Up to 2 hours:</span> <span className="font-semibold">₹4,000</span></li>
                            <li className="flex justify-between"><span>Up to 5 hours:</span> <span className="font-semibold">₹10,000</span></li>
                            <li className="flex justify-between"><span>6 hours or more:</span> <span className="font-semibold">1 full day’s booking amount</span></li>
                        </ul>

                        <h3 className="font-bold">11. Personal Belongings & Electrical Issues</h3>
                        <p>
                            Stayra shall not be responsible for any loss or damage to guests’ personal belongings or appliances due to voltage fluctuations, power surges, or electrical irregularities.
                        </p>

                        <h3 className="font-bold">12. Limitation of Liability</h3>
                        <p>
                            Stayra, property owners, and third-party service providers operate independently. Stayra shall not be liable for any indirect, incidental, consequential, or special damages, including personal injury, loss, or property damage, arising from the stay, except where liability is mandated under applicable law.
                        </p>

                    </div>
                </div>
            </div>
        </main>
    );
}
