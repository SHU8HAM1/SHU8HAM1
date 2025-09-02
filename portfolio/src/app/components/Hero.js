'use client';

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    // Colors matching bg-[radial-gradient(ellipse_at_60%_40%,_#101014_0%,_#23272f_70%,_#0a0a0f_100%)]
    const colors = [
      [16, 16, 20],     // #101014
      [35, 39, 47],     // #23272f
      [10, 10, 15],     // #0a0a0f
    ];

    let step = 0;
    const gradientSpeed = 0.002;

    let colorIndices = [0, 1, 2, 0];

    const updateGradient = () => {
      if (!document.getElementById("gradient-bg")) return;

      const c0_0 = colors[colorIndices[0]];
      const c0_1 = colors[colorIndices[1]];
      const c1_0 = colors[colorIndices[2]];
      const c1_1 = colors[colorIndices[3]];

      const istep = 1 - step;
      const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      const color1 = `rgb(${r1},${g1},${b1})`;

      const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      const color2 = `rgb(${r2},${g2},${b2})`;

      document.getElementById(
        "gradient-bg"
      ).style.background = `radial-gradient(ellipse at 60% 40%, ${color1} 0%, ${color2} 70%, #0a0a0f 100%)`;

      step += gradientSpeed;
      if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        colorIndices[1] =
          (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;
        colorIndices[3] =
          (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;
      }
    };

    const interval = setInterval(updateGradient, 10);
    return () => clearInterval(interval);
  }, []);



function RedoAnimText() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Full Stack Developer",
    "Software Engineer",
    "Innovator",
    "Stats Enthusiast"
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="min-h-[50px]"><motion.span className="inline text-white text-4xl">{displayText}</motion.span></div>;
}






  return (
    <div>
  <div id="gradient-bg" className="relative h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_60%_40%,_#101014_0%,_#23272f_70%,_#0a0a0f_100%)] overflow-hidden">

      {/* Content */}
      <div className="z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Shubham Garg
        </motion.h1>
        <RedoAnimText />
      </div>

      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>


    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
      <a href="#experience" aria-label="Scroll Down">
        <svg className="animate-bounce w-8 h-8 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
    </div>
  );
};

export default Hero;
