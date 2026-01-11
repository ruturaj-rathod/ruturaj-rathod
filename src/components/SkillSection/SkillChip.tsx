"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface SkillChipProps {
  children: React.ReactNode;
  index: number;
  isGlowing: boolean;
  onHoverStart: (index: number) => void;
  glowColor?: string;
  glowDuration?: number;
}

export default function SkillChip(props: SkillChipProps) {
  const {
    children,
    index,
    isGlowing,
    onHoverStart,
    glowColor = "rgb(139, 92, 246)", // violet-500
    glowDuration = 0.5,
  } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: index * 0.05 }}
      onHoverStart={() => onHoverStart(index)}
      className="relative flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-800 px-4 cursor-pointer"
    >
      {/* Glowing border effect */}
      <AnimatePresence>
        {isGlowing && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: `0 0 0 2px ${glowColor}`,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: glowDuration,
                ease: "easeInOut",
              }}
            />

            {/* Outer glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: glowColor,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: glowDuration,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <motion.p
        className="relative z-10 text-sm font-medium text-gray-200"
        animate={{
          scale: isGlowing ? 1.05 : 1,
          color: isGlowing ? "#ffffff" : "#e5e7eb",
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
}
