"use client";
import Hero from "@/components/hero/hero";
import Section2 from "@/components/section-2";
import Section3 from "@/components/section-3";
import Section4 from "@/components/section-4";
import Footer from "@/components/footer";
import ResponsivenessAlert from "@/components/responsiveness-alert";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayAlert, setDisplayAlert] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  console.log(windowSize);

  const handleResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  const handleDisplayAlert = () => {
    if (windowSize.width < 1531 || windowSize.height < 800) {
      setDisplayAlert(true);
    } else {
      setDisplayAlert(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    handleDisplayAlert();
  }, [windowSize]);

  return (
    <>
      {displayAlert ? (
        <ResponsivenessAlert />
      ) : (
        <>
          <Hero />
          <Section3 />
          <Section4 />
          <Section2 />
          <Footer />
        </>
      )}
    </>
  );
}
