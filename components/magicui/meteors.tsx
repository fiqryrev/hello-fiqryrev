"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}
const generateMeteorStyles = (count: number): React.CSSProperties[] =>
  [...new Array(count)].map(() => ({
    top: -5,
    left: Math.floor(Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000)) + "px",
    animationDelay: Math.random() * 1 + 0.2 + "s",
    animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
  }));

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    () => generateMeteorStyles(number),
  );

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]",
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
