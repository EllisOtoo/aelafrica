import React from "react";

type HeroHeadingProps = {
  title: string;
};

export default function HeroHeading({ title }: HeroHeadingProps) {
  return (
    <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-6xl md:text-7xl xl:text-8xl">
      {title}
    </h1>
  );
}


