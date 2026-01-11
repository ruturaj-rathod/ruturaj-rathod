"use client";

import { useState } from "react";
import { motion } from "motion/react";
import SkillChip from "./SkillChip";

const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "MUI",
  "Express.js",
  "Node.js",
  "Socket.IO",
  "MongoDB",
  "AWS",
  "Docker",
  "Git"
];

const glowColor = "rgb(59, 130, 246)";
const glowDuration = 0.5;
const transferDuration = 0.15;

export default function SkillSection() {
  const [glowingIndex, setGlowingIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleHover = (index: number) => {
    if (isTransitioning) return;

    if (glowingIndex === null) {
      // First hover - just set it
      setGlowingIndex(index);
    } else if (glowingIndex !== index) {
      // Transfer glow to new chip
      setIsTransitioning(true);

      // Calculate transfer path
      const start = glowingIndex;
      const end = index;
      const step = start < end ? 1 : -1;
      const path: number[] = [];

      for (let i = start; i !== end; i += step) {
        path.push(i + step);
      }

      // Animate through path
      path.forEach((pathIndex, i) => {
        setTimeout(() => {
          setGlowingIndex(pathIndex);
          if (i === path.length - 1) {
            setIsTransitioning(false);
          }
        }, i * transferDuration * 1000);
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isTransitioning) {
      setGlowingIndex(null);
    }
  };

  return (
    <section className="mb-24 md:mb-32" id="skills">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-white mb-6"
      >
        Skills &amp; Technologies
      </motion.h3>
      <div className="flex flex-wrap gap-3" onMouseLeave={handleMouseLeave}>
        {SKILLS.map((skill, index) => (
          <SkillChip
            key={index}
            index={index}
            isGlowing={glowingIndex === index}
            onHoverStart={handleHover}
            glowColor={glowColor}
            glowDuration={glowDuration}
          >
            {skill}
          </SkillChip>
        ))}
      </div>
    </section>
  );
}
