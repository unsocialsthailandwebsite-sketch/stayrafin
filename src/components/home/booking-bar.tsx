"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookingBar() {
    return (
        <div className="relative z-30 container mx-auto px-4 -mt-12 md:-mt-16 mb-16 lg:mb-24">
            <div className="bg-white p-6 md:p-8 shadow-xl rounded-none md:rounded-sm flex flex-col lg:flex-row gap-6 items-center justify-between border-t-4 border-stayra-gold">

                {/* Check In */}
                <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-6 cursor-pointer group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-hover:text-stayra-green transition-colors">
                        Arrival
                    </label>
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-stayra-gold" />
                        <span className="font-serif text-xl text-stayra-charcoal">Select Date</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto lg:hidden" />
                    </div>
                </div>

                {/* Check Out */}
                <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-6 cursor-pointer group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-hover:text-stayra-green transition-colors">
                        Departure
                    </label>
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-stayra-gold" />
                        <span className="font-serif text-xl text-stayra-charcoal">Select Date</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto lg:hidden" />
                    </div>
                </div>

                {/* Guests */}
                <div className="flex-1 w-full pb-4 lg:pb-0 lg:pr-6 cursor-pointer group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-hover:text-stayra-green transition-colors">
                        Guests
                    </label>
                    <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-stayra-gold" />
                        <span className="font-serif text-xl text-stayra-charcoal">2 Adults, 1 Child</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                    </div>
                </div>

                {/* Button */}
                <Button
                    className="w-full lg:w-auto bg-stayra-green hover:bg-stayra-green-light text-white px-10 py-8 text-sm uppercase tracking-widest font-bold rounded-none"
                >
                    Check Availability
                </Button>
            </div>
        </div>
    );
}
