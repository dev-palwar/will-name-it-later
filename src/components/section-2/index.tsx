"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import aboutImage from "../../assets/img/about.webp";

const Section2 = () => {
  const { scrollYProgress } = useScroll();

  // Get the viewport width and height
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Map scroll progress to height and width, scaling to viewport size
  const height = useTransform(scrollYProgress, [0, 1], [50, viewportHeight]); // From 50px to full viewport height
  const width = useTransform(scrollYProgress, [0, 1], [25, viewportWidth]); // From 25px to full viewport width

  return (
    <div className="full-section flex flex-col gap-11 mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="heading top-20 flex justify-center"
      >
        <h1 className="uppercase leading-[1] text-[4rem] font-bold text-center">
          Discover the worlds <br />
          largest shared adventure
        </h1>
      </motion.div>
      <motion.div
        style={{ height, width }}
        className="image-box border-2 overflow-hidden"
      >
        <Image src={aboutImage} alt="" className="fit-media" />
      </motion.div>
    </div>
  );
};

export default Section2;
