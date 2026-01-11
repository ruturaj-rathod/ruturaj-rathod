"use client";

import { motion } from "motion/react";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  href = "#",
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      href={`/projects/${href}`}
      className="group"
    >
      <div
        className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl p-8 text-white min-h-[480px] justify-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url("${image}")`,
        }}
      >
        <h3 className="text-3xl font-bold leading-tight tracking-[-0.02em]">
          {title}
        </h3>
        <p className="text-white/90 text-lg font-normal leading-normal max-w-xl">
          {description}
        </p>
      </div>
    </motion.a>
  );
};
