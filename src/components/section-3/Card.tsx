"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10; // Reduced scale factor for smoother motion
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10; // Reduced scale factor for smoother motion
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="cursor-pointer  card h-[60vh] relative rounded-2xl overflow-hidden border-1"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.95 }} // Pressed effect on hover
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
    >
      <motion.div
        className="inner-card h-full w-full relative"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotateX: -mousePosition.y,
          rotateY: mousePosition.x,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10, // Slower, smoother motion
        }}
      >
        <video
          src="videos/feature-1.mp4"
          autoPlay
          muted
          loop
          className="absolute fit-media"
        />
        <div className="heading relative w-[40%] p-4">
          <h1 className="uppercase text-2xl font-bold">radiant</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eius at placeat, dolorum earum temporibus? Numquam suscipit
            temporibus ex illum.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
