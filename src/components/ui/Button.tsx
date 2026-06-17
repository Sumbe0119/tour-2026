import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-cream-100 text-warm-700 hover:bg-white shadow-lg shadow-warm-900/20",
  secondary:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  ghost: "text-warm-700 hover:text-warm-900 hover:bg-warm-100/50",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-200";

  const combined = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combined} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combined} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
