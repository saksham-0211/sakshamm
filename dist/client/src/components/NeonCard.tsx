import { ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonCardProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  delay?: number;
}

export function NeonCard({ children, variant = "primary", className = "", delay = 0 }: NeonCardProps) {
  const borderColor = {
    primary: "group-hover:border-primary/50 group-hover:shadow-[0_0_20px_-5px_var(--primary)]",
    secondary: "group-hover:border-secondary/50 group-hover:shadow-[0_0_20px_-5px_var(--secondary)]",
    accent: "group-hover:border-accent/50 group-hover:shadow-[0_0_20px_-5px_var(--accent)]",
  };

  const cornerColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative bg-card border border-border p-6 transition-all duration-300 ${borderColor[variant]} ${className}`}
    >
      {/* Corner accents */}
      <div className={`absolute -top-1 -left-1 w-3 h-3 ${cornerColor[variant]} transition-transform duration-300 group-hover:scale-150`} />
      <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${cornerColor[variant]} transition-transform duration-300 group-hover:scale-150`} />
      
      {/* Scanline overlay effect on hover */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300" />
      
      {children}
    </motion.div>
  );
}
