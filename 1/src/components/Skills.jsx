import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">MS Office</h3>
            <p className="text-gray-700 dark:text-gray-300">Proficient in Microsoft Word, Excel, PowerPoint, and Outlook for creating documents, presentations, and managing data.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Hard Working</h3>
            <p className="text-gray-700 dark:text-gray-300">Dedicated and committed to completing tasks with diligence and integrity.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Punctuality</h3>
            <p className="text-gray-700 dark:text-gray-300">Consistently meets deadlines and manages time efficiently to deliver results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
