"use client";
import React, { useState } from "react";
import { videos } from "./data";
import { Button } from "../ui/button";

const Hero = () => {
  const [selectedVideoNumber, setSelectedVideoNumber] = useState<number>(0);

  const handleVideoClick = () => {
    setSelectedVideoNumber((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center relative">
      <video
        src={videos[(selectedVideoNumber + 1) % videos.length].video}
        muted
        autoPlay
        loop
        className="absolute fit-media top-0 left-0 z-0"
      />

      <div className="relative fit-media center bg-[#00000080] z-10">
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
            <h1 className="uppercase text-[8rem] font-bold">gaming</h1>
          </div>
        </div>
        <div className=" h-[30vh] w-[25vw] center relative">
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
  );
};

export default Hero;
