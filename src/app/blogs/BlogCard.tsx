"use client";

import { motion } from "motion/react";

import { MaterialArrowForward } from "@/components/icons";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

export default function BlogCard({
  image,
  category,
  date,
  title,
  description,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4 group cursor-pointer"
    >
      {/* Image */}
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url("${image}")` }}
      />

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
          {category} • {date}
        </p>

        <p className="text-white text-lg font-bold leading-tight">{title}</p>

        <p className="text-zinc-400 text-sm font-normal leading-normal">
          {description}
        </p>

        <span className="flex items-center gap-1 text-blue-500 text-sm font-semibold mt-1">
          Read More
          <MaterialArrowForward className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.div>
  );
}
