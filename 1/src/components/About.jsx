import React from 'react';
import { Code, Palette, Zap, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="hy.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              MBA (Finance) Graduate | Aspiring Business Analyst
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am an MBA (Finance) graduate from RG Kedia College of Commerce with a strong academic foundation and practical experience in working capital analysis. My education has helped me develop skills in financial reporting, analysis, and business decision-making.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a hardworking and punctual individual, passionate about applying analytical thinking to solve real-world business problems. Outside of work, I enjoy playing badminton and listening to music.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Financial Analysis</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Working with capital, assets & reporting</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">MS Office</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Excel, PowerPoint, Word, Outlook</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Time Management</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Efficient, punctual, and task-focused</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Lifelong Learner</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Always open to learning and growing</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="sad.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
