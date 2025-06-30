"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    let start;
    function animateBar(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const percent = Math.min((elapsed / 800) * 50, 100);
      setProgress(percent);
      
      if (percent < 100) {
        intervalRef.current = requestAnimationFrame(animateBar);
      } else {
        setTimeout(() => setFadeOut(true), 200);
      }
    }
    intervalRef.current = requestAnimationFrame(animateBar);
    return () => cancelAnimationFrame(intervalRef.current);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => {
        if (onFinish) onFinish();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [fadeOut, onFinish]);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <Image
        src="/KV logo.jpg"
        alt="Logo"
        width={100}
        height={100}
        className="rounded-full object-cover shadow-lg"
        priority
      />
      <div className="mt-6 text-blue-400 text-shadow-blue-400/50 text-lg font-medium tracking-wide">
        Compiling... {Math.round(progress)}%
      </div>
      <div className="w-64 h-4 mt-6 border-blue-400 bg-gray-800 rounded-full relative">
        <div
          className="h-full bg-[#04bfff] shadow-[0_0_20px_#04bfff] border-4 border-blue-400 p-1 transition-all duration-100 rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          {/* Glowing end effect */}
          <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-r from-transparent via-[#04bfff] to-[#04bfff] shadow-[0_0_15px_#04bfff] rounded-r-full"></div>
        </div>
      </div>
    </div>
  );
} 