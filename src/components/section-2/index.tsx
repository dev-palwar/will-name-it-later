"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import aboutImage from "../../assets/img/about.webp";

const Section2 = () => {
  const { scrollYProgress } = useScroll();
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Ensure this code runs only on the client side
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial viewport size
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Map scroll progress to height and width, scaling to viewport size
  const height = useTransform(scrollYProgress, [0, 1], [50, viewport.height]); // From 50px to full viewport height
  const width = useTransform(scrollYProgress, [0, 1], [25, viewport.width]); // From 25px to full viewport width

  return (
    <div className="flex flex-col gap-11 mt-20 mb-10">
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
      <div className="image-div m-auto">
        <motion.div
          style={{ height, width }}
          className="image-box border-2 overflow-hidden"
        >
          <Image src={aboutImage} alt="" className="fit-media" />
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
