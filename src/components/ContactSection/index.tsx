"use client";

import { motion } from "motion/react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SocialIcon } from "./SocialIcon";

const socialLinks = [
  {
    label: "GitHub Profile",
    href: "https://github.com/ruturaj-rathod",
    icon: <GitHubIcon height={24} width={24} />,
  },
  {
    label: "LinkedIn Profile",
    href: "www.linkedin.com/in/ruturaj-rathod",
    icon: <LinkedInIcon height={24} width={24} />,
  },
];

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact"
    >
      <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-white">
          Get In Touch
        </h3>

        <p className="mt-3 max-w-md mx-auto text-gray-600 dark:text-gray-400">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of an amazing team. Feel free to reach out.
        </p>

        <a
          className="inline-block mt-6 bg-primary text-white font-semibold px-6 py-3 rounded-full text-base transition-transform hover:scale-105"
          href="mailto:ruturajsinhrathod3@gmail.com"
        >
          ruturajsinhrathod3@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-8">
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} {...link} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
