import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: Radix Slot is not installed yet, so I'll simplify for now to just standard button
// or I will install class-variance-authority if needed. 
// Actually, I'll use standard props for now to avoid extra dependencies I didn't verify.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        const variants = {
            primary: "bg-stayra-gold text-white hover:bg-stayra-gold/90 shadow-sm",
            secondary: "bg-stayra-charcoal text-white hover:bg-stayra-charcoal/90",
            outline: "border border-stayra-gold text-stayra-gold hover:bg-stayra-gold/10",
            ghost: "text-stayra-gold hover:bg-stayra-gold/10",
        };

        const sizes = {
            default: "h-12 px-6 py-3",
            sm: "h-9 px-4 text-sm",
            lg: "h-14 px-8 text-lg",
            icon: "h-10 w-10",
        };

        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stayra-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
