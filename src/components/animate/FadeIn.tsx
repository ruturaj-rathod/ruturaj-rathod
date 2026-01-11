"use client";

import React from "react";
import { motion } from "motion/react";

const MotionDiv = motion.div;

interface Props extends React.ComponentProps<typeof MotionDiv> {
  children: React.ReactNode;
}

const FadeIn = (props: Props) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    />
  );
};

export default FadeIn;