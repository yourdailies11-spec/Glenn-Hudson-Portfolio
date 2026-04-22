import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-body font-500 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ease-out";

  const variants = {
    primary:
      "bg-accent-gold text-bg-primary hover:bg-accent-gold/90 active:bg-accent-gold",
    secondary:
      "border border-accent-gold text-accent-gold hover:bg-accent-gold/10 active:bg-accent-gold/20",
    ghost: "text-accent-gold hover:text-accent-gold/80 active:text-accent-gold",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
