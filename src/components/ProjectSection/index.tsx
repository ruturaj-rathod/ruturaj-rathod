"use client";

import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Prompt4AI",
    description: "A Collection of Prompts for AI Tools",
    image: "/prompts4ai-project.webp",
    tech: ["Typescript", "Next.js", "Tailwind CSS", "MongoDB"],
    alt: "Abstract pattern representing Prompt4AI",
  },
  {
    title: "E-commerce StyleStore",
    description: "An e-commerce for styling products",
    image: "/e-commerce-project.webp",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
    alt: "Abstract pattern representing E-commerce StyleStore",
  },
];

export default function ProjectSection() {
  return (
    <section className="mb-24 md:mb-32" id="projects">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-white mb-8"
      >
        Featured Projects
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
