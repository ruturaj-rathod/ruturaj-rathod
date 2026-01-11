"use client";

import { motion } from "motion/react";

import BlogCard from "./BlogCard";

const blogPosts = [
  {
    title: "Mastering Asynchronous JavaScript",
    date: "October 12, 2023",
    excerpt:
      "A deep dive into Promises, async/await, and the event loop for building non-blocking applications.",
    href: "#",
  },
  {
    title: "Why I Chose Next.js for My Portfolio",
    date: "September 28, 2023",
    excerpt:
      "Exploring the benefits of server-side rendering, static site generation, and the developer experience of Next.js.",
    href: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="mb-24 md:mb-32" id="blog">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-white mb-8"
      >
        Recent Posts
      </motion.h3>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
