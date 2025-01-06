"use client";
import React, { useState } from "react";
import { videos } from "./data";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.9],
    [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    ]
  );

  const [selectedVideoNumber, setSelectedVideoNumber] = useState<number>(0);

  const handleVideoClick = () => {
    setSelectedVideoNumber((prev) => (prev + 1) % videos.length);
  };

  return (
    <motion.div style={{ clipPath }}>
      <div className="h-[100vh]">
        <video
          src={videos[(selectedVideoNumber + 1) % videos.length].video}
          muted
          autoPlay
          loop
          className="absolute fit-media top-0 left-0 z-0"
        />

        <div className="relative dark-layer fit-media col-center bg-[#00000080] z-10">
          <div
            style={{ border: "2px solid white" }}
            className="heading fit-media absolute top-0 left-0 flex flex-col justify-between"
          >
            {" "}
            <div className="ml-2 headings text-white capitalize  font-general">
              <h1 className="uppercase text-[8rem] font-bold ">redefine</h1>
              <div className="ml-2">
                <p className="font-semibold">Enter the metagame </p>
                <p className="font-semibold">
                  unlease the global play play economy
                </p>
                <Button
                  className="uppercase mt-4 bg-yellow-100 text-black"
                  variant={"outline"}
                  size={"lg"}
                >
                  &gt; watch trailer
                </Button>
              </div>
            </div>
            <div className="text-white text-end mr-2">
              <h1 className="uppercase text-[8rem] text-[palegoldenrod] font-bold">
                gaming
              </h1>
            </div>
          </div>
          <div className="h-[30vh] w-[25vw] relative">
            <video
              onClick={handleVideoClick}
              src={videos[selectedVideoNumber].video}
              muted
              autoPlay
              loop
              className="border-2 fit-media cursor-pointer opacity-0 hover:opacity-100 transition-all translate-y-5 hover:translate-y-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
