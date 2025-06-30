"use client";
import { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaDev
} from 'react-icons/fa';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Kaustubh-Vora",
    icon: FaGithub,
    color: "hover:text-gray-300 hover:bg-gray-800"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kaustubh-vora/",
    icon: FaLinkedin,
    color: "hover:text-blue-400 hover:bg-blue-900/20"
  },
  {
    name: "Devpost",
    url: "https://devpost.com/Kaustubh-Vora?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    icon: FaDev,
    color: "hover:text-green-400 hover:bg-green-900/20"
  }
];

const SocialIcon = ({ link, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className={`group relative p-4 rounded-xl border border-gray-700 dark:border-gray-600 bg-gray-800/50 dark:bg-gray-900/50 transition-all duration-300 ${link.color} hover:scale-105 hover:shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        isHovered ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm' : 'opacity-0'
      }`}></div>
      
      {/* Icon container */}
      <div className="relative z-10 flex flex-col items-center space-y-2">
        <div className={`p-3 rounded-full transition-all duration-300 ${
          isHovered ? 'bg-white/10 scale-110' : 'bg-gray-700/50'
        }`}>
          <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
          {link.name}
        </span>
      </div>
    </a>
  );
};

const EmailButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="mailto:kaustubhvora60@gmail.com"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="400"
      className={`inline-flex items-center space-x-3 px-8 py-4 rounded-xl border-2 transition-all duration-300 ${
        isHovered 
          ? 'border-blue-400 bg-blue-400/10 text-blue-400 shadow-lg shadow-blue-400/25' 
          : 'border-gray-600 text-gray-300 hover:border-blue-400'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaEnvelope className={`w-5 h-5 transition-all duration-300 ${
        isHovered ? 'animate-pulse' : ''
      }`} />
      <span className="font-semibold">Get in Touch</span>
    </a>
  );
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 rounded-full"></div>
        </div>

        {/* Contact Container */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-2xl"></div>
          
          {/* Main content */}
          <div className="relative bg-gray-800/30 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 dark:border-gray-600/50 p-8 lg:p-12">
            
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Left Column - Personal Message */}
              <div className="space-y-6">
                <div>
                  <h3 
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                    className="text-2xl font-bold text-white mb-4"
                  >
                    Let&apos;s Connect
                  </h3>
                  <p 
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="400"
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    Let&apos;s collaborate, connect or chat. I&apos;m always open to new ideas and opportunities!
                  </p>
                </div>
                
                <div className="pt-4">
                  <EmailButton />
                </div>
              </div>

              {/* Right Column - Social Icons */}
              <div>
                <h4 
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  className="text-xl font-semibold text-white mb-6 text-center"
                >
                  Follow My Journey
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link, index) => (
                    <SocialIcon key={link.name} link={link} index={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              {/* Personal Message */}
              <div className="text-center space-y-6">
                <div>
                  <h3 
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                    className="text-2xl font-bold text-white mb-4"
                  >
                    Let&apos;s Connect
                  </h3>
                  <p 
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="400"
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    Let&apos;s collaborate, connect or chat. I&apos;m always open to new ideas and opportunities!
                  </p>
                </div>
                
                <div className="pt-4">
                  <EmailButton />
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-8 border-t border-gray-700/50">
                <h4 
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  className="text-xl font-semibold text-white mb-6 text-center"
                >
                  Follow My Journey
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <SocialIcon key={link.name} link={link} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 