"use client";
import { useState, useEffect } from "react";

export default function TypewriterText({ text, speed = 100, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
} 