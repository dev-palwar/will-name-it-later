import React from "react";
import Heading from "../ui/heading";
import { Button } from "../ui/button";
import Card from "../section-3/Card";
import image1 from "../../assets/img/a.storyblok.png";
import image2 from "../../assets/img/b.storyblok.png";

const Section4 = () => {
  return (
    <div className="section-4 p-16 flex justify-between overflow-scroll h-[100vh]">
      <div className="text-content sticky top-16 flex flex-col items-start justify-center basis-[27rem] gap-4">
        <Heading heading="Latest Updates" />
        <p>
          Stay updated with the latest news, events, and updates in our
          ecosystem. Be part of our universe growth and evolution.
        </p>
        <Button size={"lg"} variant={"outline"}>
          read all news
        </Button>
      </div>
      <div className="images-section flex flex-col gap-1 h-[80vw] w-[50%] overflow-y-auto h-fu">
        <Card image={image1} />
        <p className="font-medium">
          Nexus: Zentry’s Social Portal <br />
          Bridging Human & AI in the Global Play Economy
        </p>
        <Card image={image2} />
        <p className="font-medium">
          Zentry Whitepaper: The Blueprint <br /> The Blueprintto the Metagame
        </p>
      </div>
    </div>
  );
};

export default Section4;
