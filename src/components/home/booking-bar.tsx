"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ChevronDown, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const PROPERTIES = [
    { id: "the-kukas-villa", name: "The Kukas Villa" },
    { id: "choti-haveli", name: "Choti Haveli" },
];

export function BookingBar() {
    const [property, setProperty] = useState("");
    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [guests, setGuests] = useState("2");

    const handleCheckAvailability = () => {
        if (!property) {
            alert("Please select a property");
            return;
        }
        if (!arrival || !departure) {
            alert("Please select dates");
            return;
        }

        if (new Date(arrival) >= new Date(departure)) {
            alert("Departure date must be after arrival date");
            return;
        }

        const propertyName = PROPERTIES.find(p => p.id === property)?.name || "Stayra Property";
        const message = `Hi, I am interested in booking *${propertyName}*.\n\n*Dates:* ${arrival} to ${departure}\n*Guests:* ${guests}\n\nPlease let me know the availability and pricing.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/917340031394?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="relative z-30 container mx-auto px-4 mt-0 md:-mt-16 mb-16 lg:mb-24">
            <div className="bg-white p-6 md:p-8 shadow-xl rounded-none md:rounded-sm flex flex-col lg:flex-row gap-6 items-center justify-between border-t-4 border-stayra-gold">

                {/* Property Selection */}
                <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-6 cursor-pointer group relative">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-hover:text-stayra-green transition-colors">
                        Property
                    </label>
                    <div className="flex items-center gap-3">
                        <Home className="w-5 h-5 text-stayra-gold" />
                        <select
                            value={property}
                            onChange={(e) => setProperty(e.target.value)}
                            className="font-serif text-xl text-stayra-charcoal w-full bg-transparent border-none outline-none appearance-none cursor-pointer pr-4"
                        >
                            <option value="" disabled>Select Property</option>
                            {PROPERTIES.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-6 lg:right-6 pointer-events-none" />
                    </div>
                </div>

                {/* Check In */}
                <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-6 cursor-pointer group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-hover:text-stayra-green transition-colors">
                        Arrival
                    </label>
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-stayra-gold" />
                        <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            className="font-serif text-lg text-stayra-charcoal bg-transparent border-none outline-none w-full uppercase"
                        />
                    </div>
                </div>

                {/* Check Out */}
                <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-6 cursor-pointer group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-hover:text-stayra-green transition-colors">
                        Departure
                    </label>
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-stayra-gold" />
                        <input
                            type="date"
                            value={departure}
                            min={arrival ? new Date(new Date(arrival).getTime() + 86400000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                            onChange={(e) => setDeparture(e.target.value)}
                            className="font-serif text-lg text-stayra-charcoal bg-transparent border-none outline-none w-full uppercase"
                        />
                    </div>
                </div>

                {/* Guests */}
                <div className="flex-1 w-full pb-4 lg:pb-0 lg:pr-6 cursor-pointer group relative">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-hover:text-stayra-green transition-colors">
                        Guests
                    </label>
                    <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-stayra-gold" />
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="font-serif text-xl text-stayra-charcoal w-full bg-transparent border-none outline-none appearance-none cursor-pointer"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map(num => (
                                <option key={num} value={num}>{num} Guest{num !== 1 && 's'}</option>
                            ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 lg:right-6 pointer-events-none" />
                    </div>
                </div>

                {/* Button */}
                <Button
                    onClick={handleCheckAvailability}
                    className="w-full lg:w-auto bg-stayra-green hover:bg-stayra-green-light text-white px-10 py-8 text-sm uppercase tracking-widest font-bold rounded-none"
                >
                    Check Availability
                </Button>
            </div>
        </div>
    );
}
