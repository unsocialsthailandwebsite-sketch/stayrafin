"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

const AnimatedNumber = ({ value, float = false }: { value: number, float?: boolean }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30, // Lower damping for more bounce or higher for smoother stop? 30 is balanced.
        stiffness: 70,
        duration: 2000
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                if (float) {
                    ref.current.textContent = latest.toFixed(2);
                } else {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });
    }, [springValue, float]);

    return <span ref={ref}>0</span>;
};

const StatItem = ({
    value,
    label,
    suffix = "",
    prefix = "",
    middle = "",
    float = false,
    customLabel
}: {
    value?: number;
    label: string;
    suffix?: string;
    prefix?: string;
    middle?: string;
    float?: boolean;
    customLabel?: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-8 flex-1 border-b md:border-b-0 md:border-r border-gray-200 last:border-0">
            <div className="flex items-center gap-1 mb-3 text-stayra-primary">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5B6D5B]"> {/* Matching the greenish tone from image roughly */}
                    {prefix}
                    {value !== undefined ? <AnimatedNumber value={value} float={float} /> : null}
                    {middle}
                    {suffix}
                </div>
            </div>
            <div className="text-gray-600 text-sm md:text-base font-medium text-left leading-tight max-w-[120px]">
                {customLabel ? customLabel : label}
            </div>
        </div>
    );
};

export const StatsSection = () => {
    return (
        <section className="bg-[#F9Fcf9] border-t border-gray-100 py-16">
            {/* Light minty background to match image slightly or stayra ivory */}
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y-0 md:divide-x lg:divide-x divide-gray-100 min-h-[160px]">

                    {/* 1000+ Guests Hosted */}
                    <div className="flex items-center justify-center p-8 flex-1 gap-4">
                        <span className="text-4xl md:text-5xl text-[#6B8E6B] font-serif font-medium flex">
                            <AnimatedNumber value={1000} />+
                        </span>
                        <div className="text-gray-600 text-sm uppercase tracking-wide font-medium flex flex-col text-left">
                            <span>Guests</span>
                            <span>Hosted</span>
                        </div>
                    </div>

                    {/* 1 OUT OF 100 Villas Picked */}
                    <div className="flex items-center justify-center p-8 flex-1 gap-4">
                        <span className="text-4xl md:text-5xl text-[#6B8E6B] font-serif font-medium flex items-baseline">
                            <span>1</span>
                            <span className="text-sm px-2 text-gray-400 font-sans font-normal uppercase">OUT OF</span>
                            <span>100</span>
                        </span>
                        <div className="text-gray-600 text-sm uppercase tracking-wide font-medium flex flex-col text-left">
                            <span>Villas</span>
                            <span>Picked</span>
                        </div>
                    </div>

                    {/* 4.95 Average Star Rating */}
                    <div className="flex items-center justify-center p-8 flex-1 gap-4">
                        <span className="text-4xl md:text-5xl text-[#6B8E6B] font-serif font-medium flex">
                            <AnimatedNumber value={4.95} float={true} />
                        </span>
                        <div className="text-gray-600 text-sm uppercase tracking-wide font-medium flex flex-col text-left">
                            <span>Average</span>
                            <span>Star Rating</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
