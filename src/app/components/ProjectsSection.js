"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Insurance Q&A Chatbot",
    image: "/InsuranceQ&A.png",
    github: "https://github.com/Kaustubh-Vora/capstone-2025/tree/Sudhanshu"
  },
  {
    id: 2,
    title: "Sentiment Analysis on IMDb Reviews",
    image: "/Sentimental-Analysis-of-IMDB-movie-reviews-1024x427.jpg", 
    github: "https://github.com/Kaustubh-Vora/Sentiment-Analysis-Project-NLP"
  },
  {
    id: 3,
    title: "Covid19 Data Visualization",
    image: "/DataViz.png",
    github: "https://github.com/Kaustubh-Vora/COVID-19_Data-Visualization"
  },
  {
    id: 4,
    title: "Image Captioning Model",
    image: "/ImageCaptioning.jpg",
    github: "https://github.com/Kaustubh-Vora/Image-Captioning-Model-using-LSTM-CNN"
  },
  {
    id: 5,
    title: "DeviceIQ-hyphermind",
    image: "/DeviceIQ.jpg",
    github: "https://github.com/Kaustubh-Vora/DeviceIQ-hyphermind"
  },
  {
    id: 6,
    title: "ClearCash - AI enhanced Budgeting tool",
    image: "/ClearCash.png",
    github: "https://github.com/Kaustubh-Vora/UNTHakathon2024"
  }
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="projects" className="bg-gray-50 dark:bg-black py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="relative"
        >
          {/* Navigation Arrows - Positioned outside */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed lg:block hidden"
            aria-label="Previous projects"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed lg:block hidden"
            aria-label="Next projects"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Navigation Arrows - Inside container */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed lg:hidden"
            aria-label="Previous projects"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed lg:hidden"
            aria-label="Next projects"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Projects Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                  className={`flex-shrink-0 px-3 ${
                    cardsPerView === 1 ? 'w-full' :
                    cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-black rounded-xl shadow-lg shadow-gray-50 hover:shadow-xl scale-95 hover:scale-100 transition-all duration-300 overflow-hidden h-80 border-2 border-transparent hover:border-blue-400">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gray-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      {/* GitHub Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-sm font-medium">View on GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex justify-center mt-8 space-x-2"
          >
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 