"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PhilosophySection() {
    return (
        <section id="philosophy" className="py-32 px-4 bg-stayra-ivory text-center">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-stayra-charcoal mb-8">
                        "We don't just list properties.<br className="hidden md:block" />
                        We curate sanctuaries where memories are<br className="hidden md:block" />
                        woven into every sunlit corner."
                    </h2>
                    <div className="w-24 h-[1px] bg-stayra-gold mx-auto mb-10" />
                    <Button variant="outline" className="border-stayra-charcoal text-stayra-charcoal hover:bg-stayra-charcoal hover:text-white">
                        Explore Our Collection
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
