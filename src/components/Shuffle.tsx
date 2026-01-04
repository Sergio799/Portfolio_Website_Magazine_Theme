"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ShuffleProps {
  text: string;
  className?: string;
  duration?: number;
  stagger?: number;
  triggerOnce?: boolean;
  triggerOnHover?: boolean;
  shuffleTimes?: number;
  characters?: string;
}

export default function Shuffle({
  text,
  className = '',
  duration = 0.5,
  stagger = 0.03,
  triggerOnce = true,
  triggerOnHover = true,
  shuffleTimes = 3,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}: ShuffleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: "-100px" });
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const scramble = () => {
    let iteration = 0;
    const maxIterations = shuffleTimes * text.length;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / shuffleTimes) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, duration * 1000 / maxIterations);
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      scramble();
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    if (isHovering && triggerOnHover) {
      scramble();
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: duration / 2,
            delay: index * stagger,
            ease: "easeOut"
          }}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
