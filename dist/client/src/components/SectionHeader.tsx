import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeader({ title, subtitle, alignment = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4 relative inline-block">
          <span className="relative z-10">{title}</span>
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary transform -skew-x-12 opacity-70" />
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground font-mono mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
