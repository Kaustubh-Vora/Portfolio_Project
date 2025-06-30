"use client";
import { 
  SiPython, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiTensorflow, 
  SiPytorch, 
  SiKeras,
  SiDocker,
  SiGooglecloud,
  SiApacheairflow,
  SiApachekafka,
  SiHuggingface,
  SiSnowflake,
  SiSalesforce,
  SiGithub,
  SiTableau,
  SiReact,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';
import { FaDatabase, FaRobot, FaAws } from 'react-icons/fa';
import { VscAzure } from "react-icons/vsc";
import { LuBlocks } from "react-icons/lu";

const skills = [
  // Data Science & ML
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: SiMysql },
  { name: "Pandas", icon: SiPandas },
  { name: "Numpy", icon: SiNumpy },
  { name: "Tensorflow", icon: SiTensorflow },
  { name: "Pytorch", icon: SiPytorch },
  { name: "Keras", icon: SiKeras },
  
  // Cloud Platforms
  { name: "AWS", icon: FaAws },
  { name: "Azure", icon: VscAzure  },
  { name: "GCP", icon: SiGooglecloud },
  
  // Data Engineering & AI
  { name: "Airflow", icon: SiApacheairflow },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Langchain", icon: FaRobot },
  { name: "RAG", icon: FaDatabase },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Snowflake", icon: SiSnowflake },
  
  // Business Intelligence
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Power BI", icon: LuBlocks  },
  { name: "Tableau", icon: SiTableau },
  
  // Frontend
  { name: "ReactJS", icon: SiReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  { name: "Git", icon: SiGithub  },
  { name: "Docker", icon: SiDocker  }

];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Skills
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 50}
                className="w-30 h-30 bg-black rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 ease-in-out p-6 flex flex-col items-center justify-center hover:shadow-md hover:shadow-blue-500/50 cursor-pointer group"
              >
                {/* Skill Icon */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <IconComponent
                    className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 