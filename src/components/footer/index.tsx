"use client";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo-local.png";
import Image from "next/image";

type LinkColumnData = {
  title: string;
  links: string[];
};

interface LinksColumnProps {
  title: string;
  links: string[];
}

const Footer: React.FC = () => {
  const linksData: LinkColumnData[] = [
    {
      title: "Explore",
      links: ["Home", "Prologue", "About", "Contact"],
    },
    {
      title: "Products",
      links: ["Radiant", "Nexus", "Zigma", "Azul"],
    },
    {
      title: "Follow Us",
      links: ["Discord", "X", "Youtube", "Medium"],
    },
    {
      title: "Resources",
      links: ["Media Kit"],
    },
  ];

  return (
    <div className="bg-[#5542ff] min-h-[100vh] p-10 md:p-20">
      <motion.div
        className="h-[20vh] md:h-[40vh] flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          const width = rect.width;
          const height = rect.height;

          const skewX = (mouseX / width - 0.5) * 10;
          const skewY = (mouseY / height - 0.5) * 10;
          const scaleY = 1 + (mouseY / height - 0.5) * 0.5;

          e.currentTarget.style.transform = `skewX(${skewX}deg) skewY(${skewY}deg) scaleY(${scaleY})`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "skewX(0deg) skewY(0deg) scaleX(1) scaleY(1)";
        }}
      >
        <motion.p
          className="uppercase text-[20vh] md:text-[40vh] leading-none font-bold"
          initial={{ scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 }}
          whileHover={{ scaleX: 1, scaleY: 1, skewX: 2, skewY: 2 }}
        >
          Zentry
        </motion.p>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-around p-6 mt-5">
        <div className="flex justify-center md:block">
          <Image src={logo} height={100} width={100} alt="ZENTRY" />
        </div>
        <div className="grid grid-cols-2 md:flex md:justify-around gap-6 mt-6 md:mt-0">
          {linksData.map((column, index) => (
            <LinksColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const LinksColumn: React.FC<LinksColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <h1 className="uppercase text-lg md:text-xl">{title}</h1>
      <ul className="flex flex-col gap-3 text-base md:text-2xl font-medium">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
