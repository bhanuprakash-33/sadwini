// Hero.jsx
import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Hello, I'm <span className="text-blue-600 dark:text-blue-400">Yelle Sadwini</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            MBA (Finance) Graduate passionate about business strategy, analysis & technology integration
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button onClick={scrollToProjects} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </button>
            <button onClick={scrollToContact} className="px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg font-medium">
              Contact Me
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:yellesadwini2175@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300">
              <Mail size={24} />
            </a>
           <a href="https://www.linkedin.com/in/sadwini-yelle-858896341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
   className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300">
  <Linkedin size={24} />
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Updated Skills Section
const skills = [
  { name: 'MS Word', level: 90, category: 'office' },
  { name: 'MS Excel', level: 85, category: 'office' },
  { name: 'PowerPoint', level: 88, category: 'office' },
  { name: 'Outlook', level: 80, category: 'office' },
  { name: 'Financial Analysis', level: 75, category: 'finance' },
  { name: 'Time Management', level: 80, category: 'personal' },
  { name: 'Communication', level: 85, category: 'personal' },
];

// About Section Updates
// Replace job title: "MBA (Finance) Graduate | Aspiring Business Analyst"
// Replace paragraphs with:
// "I am an MBA (Finance) graduate from RG Kedia College of Commerce. I am deeply interested in finance, business operations, and data-driven decision-making. My academic journey has equipped me with analytical, problem-solving, and communication skills. I am always eager to apply these abilities in a real-world business setting."

// Project Update Example
const projects = [
  {
    id: 1,
    title: 'Working Capital Analysis - Heritage Foods',
    description: 'A comprehensive project on evaluating the components of working capital and analyzing financial efficiency.',
    image: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'finance',
    technologies: ['Financial Analysis', 'Excel', 'Reporting'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

// Footer Update
// Replace: "© {currentYear} Your Name" → "© {currentYear} Yelle Sadwini"
