"use client";

import { motion } from "motion/react";
import ExperienceItem from "./ExperienceItem";

const EXPERIENCES = [
  {
    jobTitle: "Software Engineer",
    duration: "June 2024 - Present",
    organization: "AV DEVS Solutions Pvt. ltd.",
    description:
      "Led the development of a design system in React, improving development velocity by 30%. Architected a scalable frontend for a high-traffic platform using Next.js. and Typescript",
    isCurrentlyWorking: true,
  },
  {
    jobTitle: "React.js Developer",
    duration: "Jan 2023 - June 2024",
    organization: "Cloudgate Softech LLP",
    description:
      "Develop and Design a Data Visualization Dashboard using React.js, Material UI from scratch. Implemented a real-time analytics using Socket.io",
  },
  {
    jobTitle: "Software Engineer Trainee",
    duration: "June 2022 - June 2022",
    organization: "Shaligram Infotech",
    description:
      "Develop and Design a mobile responsive website using core Web Technologies.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="mb-24 md:mb-32" id="experience">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-white mb-8"
      >
        Experience
      </motion.h3>
      <div className="space-y-10 border-l-2 border-gray-700 ml-3">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem experience={experience} key={index} />
        ))}
      </div>
    </section>
  );
}
