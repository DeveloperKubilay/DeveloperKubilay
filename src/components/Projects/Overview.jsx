import { useState } from 'react';
import SectionHeader from "../../utils/selectionHeader.jsx";
import Fullscreen from "./Fullscreen.jsx";
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, t }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-900/30 transform transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:border-blue-700/40 hover:scale-105 hover:-translate-y-1 relative">
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-2 pr-16">
        {project.name}
      </h3>
      <p className="text-gray-300 mb-4">{project.description || t("projectNoDescription")}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.topics && project.topics.slice(0, 3).map((topic, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-blue-900/60 text-blue-300 border-blue-700/50 rounded-full text-xs font-medium border transition-all hover:scale-110"
          >
            {topic}
          </span>
        ))}
        {project.topics && project.topics.length > 3 && (
          <span className="px-3 py-1 bg-gray-700/60 text-gray-300 border-gray-600/50 rounded-full text-xs font-medium border">
            +{project.topics.length - 3}
          </span>
        )}
      </div>
      
      {project.language && (
        <div className="absolute top-3 right-3 bg-gray-700/80 text-gray-300 text-xs font-medium py-1 px-2.5 rounded-full border border-gray-600">
          <span className="inline-block w-2 h-2 rounded-full mr-1 bg-blue-400"></span>
          {project.language}
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <a 
          href={`${project.html_url}/fork`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
          </svg>
          {t('fork')}
        </a>
        <a 
          href={project.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
        >
          {t('viewProject')}
        </a>
      </div>
    </div>
  );
};

function Body({ githubProjects = [] }) {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const { t } = useTranslation();
  
  const projects = githubProjects.projects || [];
  
  const projectTabs = [];
  for (let i = 0; i < projects.length; i += 9) {
    projectTabs.push(projects.slice(i, i + 9));
  }

  const toggleFullScreen = () => {
    setShowFullscreen(!showFullscreen);
  };

  return (
    <>
      <div id="projects-section">
        <SectionHeader subtitle={t('projectsSubtitle')} title={t('projects_text')} />
        
        <div className="flex justify-center mt-4 mb-8">
          <button 
            onClick={toggleFullScreen}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 hover:bg-blue-600 rounded-md transition-all duration-300 transform hover:scale-110 text-white flex items-center text-sm sm:text-base"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
            {t('fullscreenView')}
          </button>
        </div>
        
        <div className="relative w-11/12 sm:w-4/5 mx-auto mb-16 px-2 sm:px-0">
          {!projects || projects.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <div className="loading-spinner"></div>
              <p className="ml-2 text-gray-300">{t('loadingProjects')}</p>
            </div>
          ) : (
            <>
              {projectTabs.length > 1 && (
                <div className="flex justify-center mb-6 overflow-x-auto pb-2">
                  <div className="inline-flex bg-gray-800 rounded-lg p-1">
                    {projectTabs.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTab(index)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                          currentTab === index
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {projectTabs[currentTab]?.map(project => (
                  <ProjectCard key={project.id} project={project} t={t} />
                ))}
              </div>
              {projectTabs.length > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="inline-flex">
                    <button
                      onClick={() => setCurrentTab(prev => (prev > 0 ? prev - 1 : prev))}
                      disabled={currentTab === 0}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-l-md text-xs sm:text-sm font-medium ${
                        currentTab === 0
                          ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {t('previousProject')}
                    </button>
                    <button
                      onClick={() => setCurrentTab(prev => (prev < projectTabs.length - 1 ? prev + 1 : prev))}
                      disabled={currentTab === projectTabs.length - 1}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-r-md text-xs sm:text-sm font-medium ${
                        currentTab === projectTabs.length - 1
                          ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {t('nextProject')}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        
        <Fullscreen 
          projects={projects} 
          isOpen={showFullscreen} 
          onClose={() => setShowFullscreen(false)} 
        />
      </div>
    </>
  );
}

export default Body;
