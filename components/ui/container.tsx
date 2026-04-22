import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
  };

  return (
    <div className={`mx-auto px-6 md:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
