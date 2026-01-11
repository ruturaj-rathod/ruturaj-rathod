"use client";

import { motion } from "motion/react";

interface ExperienceItemProps {
  experience: {
    description: string;
    duration: string;
    jobTitle: string;
    organization: string;
    isCurrentlyWorking?: boolean;
  };
}

export default function ExperienceItem(props: ExperienceItemProps) {
  const { experience } = props;
  const { description, duration, isCurrentlyWorking, jobTitle, organization } =
    experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-8"
    >
      <div
        className={[
          "absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-background",
          isCurrentlyWorking ? "bg-blue-500" : "bg-gray-600",
        ].join(" ")}
      ></div>
      {/* Ripple Effect */}
      {isCurrentlyWorking && (
        <span
          className="
        absolute -left-[11px] top-1 h-5 w-5 rounded-full
        bg-blue-500 opacity-40 animate-ripple
      "
        ></span>
      )}
      <p className="text-sm font-medium text-gray-400">{duration}</p>
      <h4 className="text-lg font-semibold text-white mt-1">{jobTitle}</h4>
      <p className="text-md font-medium text-gray-300">{organization}</p>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  );
}
