"use client";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleLoadingFinish = () => {
    setLoading(false);
    // Trigger fade-in animation after a brief delay
    setTimeout(() => setFadeIn(true), 50);
  };

  if (loading) {
    return <LoadingScreen onFinish={handleLoadingFinish} />;
  }

  return (
    <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
