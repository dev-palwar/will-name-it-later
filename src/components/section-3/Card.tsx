"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  heading?: string;
  description?: string;
  video?: string;
  image?: StaticImport;
  dontStopPlaying?: boolean;
}

const Card: React.FC<Props> = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    if (!props.dontStopPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      className="card w-full h-full relative rounded-2xl overflow-hidden border-1 cursor-grab"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.95 }}
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
          damping: 10,
        }}
      >
        {props.video ? (
          <video
            ref={videoRef}
            src={props.video}
            muted
            loop
            className="absolute fit-media"
          />
        ) : props.image ? (
          <Image
            src={props.image}
            alt=""
            className="rounded absolute h-full w-full object-contain"
          />
        ) : (
          <div className="bg-violet-500 absolute fit-media"></div>
        )}

        <div className="heading relative w-[40%] p-4">
          <h1 className="uppercase text-[2.5rem] font-bold">{props.heading}</h1>
          <p>{props.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
