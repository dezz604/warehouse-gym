"use client";

import { useEffect, useState } from "react";

const steps = [62, 58, 51, 44, 34];
import AnimatedStrengthAge from "./components/AnimatedStrengthAge";
export default function AnimatedStrengthAge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, 650);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative">
      <div className="text-sm text-white/35">Strength Age</div>

      <div className="mt-2 text-7xl font-black tracking-[-0.1em] transition-all duration-500">
        {steps[index]}
      </div>

      <div className="mt-4 text-[10px] font-black tracking-[0.22em] text-white/35">
        {index === steps.length - 1 ? "STRENGTH AGE™" : "CALCULATING"}
      </div>
    </div>
  );
}