"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppWidget() {
    const phoneNumber = "919876543210"; // Replace with actual number
    const message = "Hello! I would like to know more about Stayra Villas.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" fill="currentColor" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-white text-stayra-charcoal text-xs font-bold py-1 px-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </motion.a>
    );
}
