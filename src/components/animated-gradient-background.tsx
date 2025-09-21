"use client";

import { motion } from "framer-motion";

export function AnimatedGradientBackground({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`absolute inset-0 -z-10 w-full h-full animated-gradient ${className || ''}`}
    />
  );
}
