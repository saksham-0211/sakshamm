import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Simplified glitch effect for performance/cleanliness
  // In a real sophisticated version, we'd swap characters randomly
  
  return (
    <div 
      className={`relative inline-block group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      {isHovered && (
        <>
          <motion.span 
            className="absolute top-0 left-0 -z-10 text-primary opacity-70"
            animate={{ x: [-2, 2, -1, 0], y: [1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 0.2 }}
          >
            {text}
          </motion.span>
          <motion.span 
            className="absolute top-0 left-0 -z-10 text-secondary opacity-70"
            animate={{ x: [2, -2, 1, 0], y: [-1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.2, delay: 0.05 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
}
