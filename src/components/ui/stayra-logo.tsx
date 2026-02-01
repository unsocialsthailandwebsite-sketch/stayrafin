import Image from "next/image";
import { cn } from "@/lib/utils";

interface StayraLogoProps {
    className?: string;
    variant?: "light" | "dark";
}

export function StayraLogo({ className, variant = "dark" }: StayraLogoProps) {
    return (
        <div className={cn("relative flex items-center", className)}>
            <img
                src="/logo.png"
                alt="Stayra"
                className={cn(
                    "w-auto h-full object-contain",
                    variant === "dark" ? "brightness-0" : ""
                )}
                style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
        </div>
    );
}
// Checking standard tailwind filters: brightness-0 exists in standard config.
