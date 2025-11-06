import React from "react";

type HeroSubcopyProps = {
  text: string;
};

export default function HeroSubcopy({ text }: HeroSubcopyProps) {
  return (
    <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
      {text}
    </p>
  );
}


