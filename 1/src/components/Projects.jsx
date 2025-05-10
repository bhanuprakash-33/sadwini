import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Working Capital Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Conducted a project at Heritage Foods focused on the analysis of working capital. This included studying current assets and liabilities, identifying gaps, and proposing efficient financial practices for improved liquidity and operational performance.
            </p>
            <span className="inline-block text-sm text-gray-500 dark:text-gray-400">Finance • 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
