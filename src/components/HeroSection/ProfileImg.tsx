"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ImageAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
      }}
    >
      <div className="relative p-1 rounded-full bg-linear-to-br from-violet-500/50 via-purple-500/50 to-blue-500/50">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-500/90 via-purple-500/90 to-blue-500/90 blur-xl opacity-70 animate-pulse"></div>
        <Image
          alt="Portrait of Ruturaj Rathod"
          className="relative w-40 h-40 md:w-60 md:h-60 rounded-full object-cover ring-4 ring-background"
          data-alt="A professional head shot of Ruturaj Rathod"
          src="/profile.png"
          width="200"
          height="200"
        />
      </div>
    </motion.div>
  );
}
