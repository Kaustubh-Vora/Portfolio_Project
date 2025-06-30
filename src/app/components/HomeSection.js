"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TypewriterText from "./TypewriterText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Set initial rotation states
    gsap.set(cardOneRef.current, { rotate: 75 });
    gsap.set(cardTwoRef.current, { rotate: 65 });

    // Create scroll-triggered animations
    const tl1 = gsap.to(cardOneRef.current, {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          // When scrolling down, rotate to 0
          if (self.direction === 1) {
            gsap.to(cardOneRef.current, { rotate: 0, duration: 0.15 });
          }
          // When scrolling up, rotate back to 75
          else if (self.direction === -1) {
            gsap.to(cardOneRef.current, { rotate: 75, duration: 0.15 });
          }
        }
      },
      rotate: 0,
      ease: "power2.out"
    });

    const tl2 = gsap.to(cardTwoRef.current, {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          // When scrolling down, rotate to 0
          if (self.direction === 1) {
            gsap.to(cardTwoRef.current, { rotate: 0, duration: 0.15 });
          }
          // When scrolling up, rotate back to 65
          else if (self.direction === -1) {
            gsap.to(cardTwoRef.current, { rotate: 65, duration: 0.15 });
          }
        }
      },
      rotate: 0,
      ease: "power2.out"
    });

    // Cleanup function
    return () => {
      tl1.kill();
      tl2.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="home" className="h-[90vh] mt-10 overflow-hidden flex items-center justify-center py-20 bg-black">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36 items-center">
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">
                Hi,
              </h1>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                My name is{" "}
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <TypewriterText 
                  text="Kaustubh Vora" 
                  speed={120}
                  className="text-blue-400"
                />
              </h2>
              
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-lg">
                a Data Science graduate passionate about building intelligent systems that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Right Column - Image with Background Cards */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-[300px] h-[300px]">
                {/* Background Cards */}
                <div 
                  ref={cardOneRef}
                  className="absolute inset-0 rounded-2xl transition-all duration-1000 ease-out opacity-100"
                  style={{ backgroundColor: "transparent", border: "1px solid rgb(192, 132, 252)"}}
                />
                
                <div 
                  ref={cardTwoRef}
                  className="absolute inset-0 rounded-2xl transition-all duration-1000 ease-out delay-200 opacity-100"
                  style={{ backgroundColor: "transparent", border: "1px solid rgb(244, 114, 182)"}}
                />

                {/* Foreground Image */}
                <div className="relative z-10 w-full h-full">
                  <Image
                    src="/LinkedinImage.jpg"
                    alt="Kaustubh Vora"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-2xl object-cover w-full h-full"
                    priority
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 