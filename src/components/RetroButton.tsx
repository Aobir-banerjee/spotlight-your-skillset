
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const RetroButton = forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-pixel uppercase tracking-wide inline-flex items-center justify-center text-center",
          "transition-colors pixel-corners",
          {
            "bg-retro-amber text-retro-black hover:bg-retro-amber-light border-2 border-retro-border-brown": 
              variant === "primary",
            "bg-retro-dark-brown text-retro-amber hover:bg-retro-dark-brown/80 border-2 border-retro-border-brown": 
              variant === "secondary",
            "bg-transparent text-retro-amber border-2 border-retro-amber hover:bg-retro-amber/10": 
              variant === "outline",
            "py-1 px-2 text-xs": size === "sm",
            "py-2 px-4 text-sm": size === "md",
            "py-3 px-6 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RetroButton.displayName = "RetroButton";

export { RetroButton };
