"use client";

import { motion } from "motion/react";
import { CheckItem, Pill, SectionHeader } from "@/components/ui";

const EXPERIENCES = [
  {
    orgName: "AV DEVS Solutions Pvt. ltd.",
    jobTitle: "Software Engineer | June 2024 - Present",
    overview:
      "Responsible for building and scaling the frontend platform, improving performance, mentoring developers, and managing deployments to deliver a fast and reliable user experience.",
    techStack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "AWS",
      "Docker",
      "Tanstack Query",
    ],
    responsibilities: [
      "Built and scaled the frontend system from scratch, owning the architecture and technical direction",
      "Developed modern, user-friendly interfaces using Next.js, React.js, and TypeScript",
      "Designed a maintainable frontend architecture to support long-term scalability and performance",
      "Implemented TanStack Query for efficient client-side API caching and data synchronization",
      "Improved application performance using lazy loading and optimized rendering strategies",
      "Mentored and guided frontend developers on best practices, code quality, and architectural decisions",
      "Managed frontend deployments on AWS using Docker, ensuring reliable and consistent releases",
      "Worked closely with product and backend teams to deliver stable and high-impact features",
    ],
  },

  {
    orgName: "Cloudgate Softech LLP",
    jobTitle: "React.js Developer | Jan 2023 - June 2024",
    overview:
      "Developed a full-featured dashboard from the ground up, improving performance, enabling real-time updates, and ensuring smooth data handling. Worked across frontend and backend and collaborated with multiple teams to deliver stable, high-quality product features.",
    techStack: ["React.js", "Node.js", "Material UI", "Express.js", "MongoDB"],
    responsibilities: [
      "Built a scalable dashboard application from scratch using React.js",
      "Implemented global state management with Redux Toolkit and optimized API handling using RTK Query with client-side caching",
      "Improved application performance through lazy loading and code splitting",
      "Integrated Socket.IO to enable real-time data updates across the dashboard",
      "Worked on backend development using Express.js and MongoDB",
      "Collaborated with cross-functional teams to deliver reliable and performant features",
    ],
  },
  {
    orgName: "Shaligram Infotech",
    jobTitle: "Software Engineer Trainee | June 2022 - June 2022",
    overview:
      "Worked on building responsive web pages from design files, ensuring clean layout, good user experience, and compatibility across devices and browsers.",
    techStack: ["HTML", "CSS", "JavaScript", "jQUery", "Bootstrap"],
    responsibilities: [
      "Gained hands-on experience in core web technologies including HTML, CSS, JavaScript, and jQuery",
      "Converted Figma UI/UX designs into fully responsive web interfaces",
      "Built mobile-friendly layouts using Bootstrap",
      "Collaborated with designers to ensure pixel-perfect and user-friendly UI implementation",
      "Improved understanding of responsive design, cross-browser compatibility, and frontend best practices",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-30 max-w-4xl mx-auto">
      {EXPERIENCES.map((experience, index) => (
        <ExperienceItem experience={experience} key={index} />
      ))}
    </div>
  );
}

interface ExperienceItemProps {
  experience: (typeof EXPERIENCES)[number];
}

function ExperienceItem(props: ExperienceItemProps) {
  const { experience } = props;
  const { jobTitle, orgName, overview, responsibilities, techStack } =
    experience;

  return (
    <motion.div
      className="flex flex-col gap-8 sm:gap-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Organization, Designation & Duration */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-foreground">
          {orgName}
        </h1>

        <h2 className="text-base sm:text-lg text-gray-400">{jobTitle}</h2>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="md:col-span-1">
          <SectionHeader title="Overview" />
        </div>

        <div className="md:col-span-2">
          <p className="text-base text-gray-400 leading-relaxed">{overview}</p>
        </div>
      </div>

      {/* Stack & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="md:col-span-1">
          <SectionHeader title="Technology Stack" />
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <Pill key={item} text={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="md:col-span-1">
          <SectionHeader title="Key Responsibilities" />
        </div>

        <div className="md:col-span-2">
          <ul className="space-y-4 text-base text-gray-400">
            {responsibilities.map((text, i) => (
              <CheckItem key={i} text={text} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
