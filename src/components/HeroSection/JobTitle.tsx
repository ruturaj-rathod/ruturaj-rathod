"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const words = [
  "Software Engineer",
  "Frontend & NodeJs Development",
  "Typescript Expert",
];

const typingSpeed = 200;
const deletingSpeed = 50;
const pauseDuration = 1000;

export default function JobTitle() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setIsWaiting(true);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          if (currentText === currentWord) {
            setIsWaiting(true);
            setIsDeleting(true);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(timeout);
  }, [currentText, currentWordIndex, isDeleting, isWaiting]);

  return (
    <span className="inline-flex items-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {currentText}&nbsp;
      </motion.span>
      <motion.span
        className="ml-0.5 inline-block h-[1em] w-0.5 bg-current"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </span>
  );
}
