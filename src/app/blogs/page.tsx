"use client";

import { motion } from "motion/react";

import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

export default function BlogPage() {
  const blogPosts = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBP6oIPKIiGGckeq4bp5jteQcaBPEfSo_7d_P8VieZRqiMW5-q-ag6f9LbE8cc7Vzbt3PXZwCjAK8pUqEskOZiX-wgMX1crgXPh87lFnry_xxdmTz5-vpYVGr5AZyWIp7u2W54RE9KqGHSTNL_bNBJyotaSJG5N20LhUiDR9nimXBSAkzR9T9t45bqsTdfPhiRc9umWVQQQmgLWdlZ0jMmQno_NaiK9bOEW87l6TUNnUCVQwZxEiLNE2WqnsJ-QfnXB64Afbd-wfw0",
      category: "NODE.JS",
      date: "MARCH 15, 2024",
      title: "Optimizing Node.js Performance",
      description:
        "Explore techniques to boost your Node.js application's speed and efficiency.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhthLyqHsF_dFCxvS1-JDSGLjxQ-PJJUcRqWRVAFNW-fP38hQWq0XP749MNm-fx9q5ii2eIUU6rSbyXrjtNyt5VCHoxz8t1EFAwT2sc7BymVFgjZhxQ1EANeSKoVuR3-q08GaDDui98QGrb7TCN5HsRbQ0s-xhhRfoqvbNK9f6uQGewo8mC71pJlJyM0WR-SK__s-y9n0eULmxqg31OfENf30N6RA6R5FLm6dldu5onaPkQO338VfJKgxcinvKCSB1RX1id5u0z2M",
      category: "REACT",
      date: "FEBRUARY 28, 2024",
      title: "Building a Design System with React",
      description:
        "Learn how to create a reusable and scalable component library from scratch.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOw_DXNJiNrcVShHjfi2KBZjNOGRLb92ptkmz5EQwqn6JC9mQBpHiKYsv49RbEtfATLpAEeLpqgQxS9wpj28g0OVeIngOR-jIfGulkU9hGM0i7NL4At38HnLKBbXIDw8YpS40_6xdWQJEAXAbw0tw4PY2q86ReXJ-Gl9wYjFsn7brgHbTj3SWnryJNdDZR4XE1BSm-3q7_LSjVs3SpmEdp5nWw48Ms727tL2YxzuA21XZMQboil53DGQDMV8lCUnDxMDU8cYzzaQk",
      category: "CSS",
      date: "FEBRUARY 10, 2024",
      title: "Advanced CSS Grid Techniques",
      description:
        "Master the art of complex layouts with modern CSS features and best practices.",
    },
    // Add the rest...
  ];

  return (
    <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col gap-8 md:gap-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-3 px-4"
      >
        <h1 className="text-zinc-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-tighter">
          From the Desk of...
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg font-normal leading-normal">
          Notes and articles on Node.js, frontend development, and design.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
}
