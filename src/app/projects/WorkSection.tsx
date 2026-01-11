"use client";

import { motion } from "motion/react";
import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Prompt4AI",
    description: "A Collection of Prompts for AI Tools",
    image: "/prompts4ai-project.webp",
  },
  {
    title: "E-commerce StyleStore",
    description: "An e-commerce for styling products",
    image: "/e-commerce-project.webp",
  },
];

export const WorkSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-black text-gray-50 leading-tight tracking-[-0.033em] mb-4">
          My Work
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300/90">
          A selection of projects that showcase my passion for frontend
          development and Node.js. Each project represents a unique challenge
          and an opportunity to create something meaningful and efficient.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} href={`${index + 1}`} />
        ))}
      </div>
    </section>
  );
};
