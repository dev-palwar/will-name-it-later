import React from "react";

interface Props {
  heading: string;
}

const Heading: React.FC<Props> = ({ heading }) => {
  return (
    <h1 className="uppercase leading-[1] text-[4rem] font-bold">{heading}</h1>
  );
};

export default Heading;
