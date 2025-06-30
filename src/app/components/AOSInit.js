"use client";
import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    // Dynamically import AOS
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: false,
        offset: 100,
        delay: 0,
        anchorPlacement: 'top-bottom',
      });
    };

    initAOS();
  }, []);

  return null;
} 