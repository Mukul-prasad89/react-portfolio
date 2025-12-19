import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onContentReady, onComplete }) => {
  const [arrive, setArrive] = useState(false);

  const animationVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  const childAnimationVariant = {
    initial: { x: "-300%" },
    animate: {
      x: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        ease: "easeInOut",
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 1,
        delayChildren: 1,
      },
    },
  };

  useEffect(() => {
    // Render homepage content before preloader starts exiting
    const contentTimeout = setTimeout(() => {
      if (onContentReady) {
        onContentReady();
      }
    }, 2000);

    const exitTimeout = setTimeout(() => {
      setArrive(true);
    }, 3000);

    return () => {
      clearTimeout(contentTimeout);
      clearTimeout(exitTimeout);
    };
  }, [onContentReady]);

  const handleAnimationComplete = () => {
    if (arrive && onComplete) {
      onComplete();
    }
  };

  return (
    <motion.div
      initial="initial"
      animate={arrive ? "exit" : "animate"}
      variants={animationVariants}
      className="preloader"
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.div variants={stagger} className="preloader-text">
        <motion.h3 variants={childAnimationVariant}>Web Developer</motion.h3>
        <motion.h3 variants={childAnimationVariant}>Freelancer</motion.h3>
        <motion.h3 variants={childAnimationVariant}>Vocalist</motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
