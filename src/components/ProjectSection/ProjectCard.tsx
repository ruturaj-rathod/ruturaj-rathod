"use client";

import { motion } from "motion/react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  alt: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group bg-gray-900/50 rounded-xl border border-gray-800/50 transition-all hover:shadow-xl"
    >
      <div
        className="aspect-square bg-gray-700 rounded-lg mb-4 bg-cover bg-center"
        data-alt={project.alt}
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="px-6">
        <h4 className="text-lg font-bold text-white">{project.title}</h4>

        <p className="text-gray-400 mt-1 mb-3 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
