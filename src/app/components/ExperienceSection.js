"use client";
import { useEffect, useRef, useState } from 'react';

const experienceData = [
  {
    title: "Financial Business Analyst",
    company: "University of North Texas",
    period: "Aug 2023 – May 2025",
    achievements: [
      "Provided business insights, reducing operational costs by 9%",
      "Collaborated with FP&A using SQL, SSRS, EDI",
      "Built forecasting models (SPSS, SAS), Power BI dashboards"
    ]
  },
  {
    title: "Product Data Scientist Intern",
    company: "NTT Data Payment Services",
    period: "May 2022 – May 2023",
    achievements: [
      "Built ETL pipelines using Airflow, AWS (EC2, EMR, S3, Lambda, Bedrock)",
      "Performed QAQC, feature engineering, built statistical reports"
    ]
  },
  {
    title: "Business Intelligence Analyst Intern",
    company: "CleverCheckIn",
    period: "Dec 2020 – May 2021",
    achievements: [
      "Analyzed booking patterns using Snowflake, ARIMA, Tableau",
      "Improved forecasting accuracy by 10%, decision-making by 8%"
    ]
  }
];

const educationData = [
  {
    degree: "M.S. in Data Science",
    school: "University of North Texas",
    period: "Aug 2023 – May 2025"
  },
  {
    degree: "B.Tech in Computer Science",
    school: "NMIMS University",
    period: "Aug 2019 – Jun 2023"
  }
];

const TimelineItem = ({ item, type, index, isVisible, isLeft = false }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={index * 200}
      className={`w-full transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Content Card */}
      <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-700 dark:border-gray-600 hover:shadow-lg transition-all duration-300 h-full">
        {type === 'experience' ? (
          <>
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-blue-400 font-medium mb-2">
              {item.company}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {item.period}
            </p>
            <ul className="space-y-2">
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.degree}
            </h3>
            <p className="text-blue-400 font-medium mb-2">
              {item.school}
            </p>
            <p className="text-sm text-gray-400">
              {item.period}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const TimelineDot = ({ index, isVisible }) => {
  return (
    <div 
      data-aos="zoom-in"
      data-aos-duration="700"
      data-aos-delay={index * 200 + 100}
      className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{ 
        top: `${index * 17 + 6}rem`,
        transitionDelay: `${index * 200}ms`
      }}
    >
      <div className="w-4 h-4 bg-blue-700 rounded-full border-4 border-gray-50 dark:border-gray-900 shadow-lg ring-2 ring-blue-400/30 relative z-20"></div>
    </div>
  );
};

export default function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetId = entry.target.dataset.itemId;
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({ ...prev, [targetId]: true }));
          } else {
            // Fade out when scrolling up
            setVisibleItems(prev => ({ ...prev, [targetId]: false }));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -150px 0px'
      }
    );

    const items = sectionRef.current?.querySelectorAll('[data-item-id]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Background" className="py-20 bg-gray-50 dark:bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Background
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 rounded-full"></div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12">
          {/* Experience Section */}
          <div>
            <h3 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Experience
            </h3>
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <div key={index} data-item-id={`exp-${index}`} className="relative">
                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-4 top-0 transform -translate-y-1/2">
                    <div className="w-3 h-3 bg-blue-700 rounded-full border-3 border-gray-50 dark:border-gray-900 shadow-md ring-2 ring-blue-400/30"></div>
                  </div>
                  <div className="ml-12">
                    <TimelineItem 
                      item={item} 
                      type="experience" 
                      index={index}
                      isVisible={visibleItems[`exp-${index}`]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Education
            </h3>
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} data-item-id={`edu-${index}`} className="relative">
                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-4 top-0 transform -translate-y-1/2">
                    <div className="w-3 h-3 bg-blue-700 rounded-full border-3 border-gray-50 dark:border-gray-900 shadow-md ring-2 ring-blue-400/30"></div>
                  </div>
                  <div className="ml-12">
                    <TimelineItem 
                      item={item} 
                      type="education" 
                      index={index}
                      isVisible={visibleItems[`edu-${index}`]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block">
          {/* Section Headers */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="grid grid-cols-2 gap-8 mb-12"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-blue-400"></div>
            
            {/* Timeline Dots */}
            {experienceData.map((_, index) => (
              <TimelineDot 
                key={index} 
                index={index} 
                isVisible={visibleItems[`exp-${index}`] || visibleItems[`edu-${index}`]}
              />
            ))}
            
            {/* Timeline Rows */}
            <div className="space-y-12">
              {experienceData.map((expItem, index) => {
                const eduItem = educationData[index];
                return (
                  <div key={index} className="grid grid-cols-2 gap-8 items-start">
                    {/* Experience Card */}
                    <div data-item-id={`exp-${index}`} className="pr-8">
                      <TimelineItem 
                        item={expItem} 
                        type="experience" 
                        index={index}
                        isVisible={visibleItems[`exp-${index}`]}
                        isLeft={true}
                      />
                    </div>

                    {/* Education Card */}
                    {eduItem && (
                      <div data-item-id={`edu-${index}`} className="pl-8">
                        <TimelineItem 
                          item={eduItem} 
                          type="education" 
                          index={index}
                          isVisible={visibleItems[`edu-${index}`]}
                          isLeft={false}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 