"use client";

import { motion } from "motion/react";

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard(props: BlogCardProps) {
  const { post } = props;

  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="block p-4 rounded-lg hover:bg-gray-900/50 transition-colors"
      href={post.href}
    >
      <p className="text-sm text-gray-400">{post.date}</p>

      <h4 className="text-lg font-semibold text-white mt-1">{post.title}</h4>

      <p className="text-gray-400 mt-2 text-sm">{post.excerpt}</p>
    </motion.a>
  );
}
