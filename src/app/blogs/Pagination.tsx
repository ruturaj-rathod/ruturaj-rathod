"use client";

import { motion } from "motion/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export default function Pagination() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center gap-4 p-4 mt-8"
    >
      {/* Prev */}
      <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-700">
        <ChevronLeftIcon className="text-xl" />
      </button>

      {/* Pages */}
      <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 text-white text-sm font-bold">
        1
      </button>

      <button className="flex items-center justify-center h-10 w-10 rounded-lg text-zinc-300 text-sm font-medium transition-colors hover:bg-zinc-800">
        2
      </button>

      <button className="flex items-center justify-center h-10 w-10 rounded-lg text-zinc-300 text-sm font-medium transition-colors hover:bg-zinc-800">
        3
      </button>

      {/* Next */}
      <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-700">
        <ChevronRightIcon className="text-xl" />
      </button>
    </motion.div>
  );
}
