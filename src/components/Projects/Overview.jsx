import { useState } from 'react';
import SectionHeader from "../../utils/selectionHeader.jsx";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-900/30 transform transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:border-blue-700/40 hover:scale-105 hover:-translate-y-1 relative">
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-2">
        {project.name}
      </h3>
      <p className="text-gray-300 mb-4">{project.description || "No description available"}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.topics && project.topics.map((topic, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-blue-900/60 text-blue-300 border-blue-700/50 rounded-full text-xs font-medium border transition-all hover:scale-110"
          >
            {topic}
          </span>
        ))}
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
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
          </svg>
          Fork
        </a>
        <a 
          href={project.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
        >
          View
        </a>
      </div>
    </div>
  );
};

function Body({ githubProjects = [] }) {
  const { t } = useTranslation();
  const [fullScreen, setFullScreen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  
  const projects = githubProjects.projects || [];
  
  const projectTabs = [];
  for (let i = 0; i < projects.length; i += 9) {
    projectTabs.push(projects.slice(i, i + 9));
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setFullScreen(!fullScreen);
  };

  return (
    <>
      <SectionHeader subtitle="Bu zamana kadar yaptığım projeler" title="Projelerim" />
      
      <div className="flex justify-center mt-4 mb-8">
        <button 
          onClick={toggleFullScreen}
          className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-md transition-all duration-300 transform hover:scale-110 text-white flex items-center"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={fullScreen 
                ? "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
                : "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              }
            />
          </svg>
          Tam ekranda bak (önerilir)
        </button>
      </div>
      
      <div className="relative w-4/5 mx-auto mb-16">
        {!projects || projects.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="loading-spinner"></div>
            <p className="ml-2 text-gray-300">Projeler yükleniyor...</p>
          </div>
        ) : (
          <>
            {projectTabs.length > 1 && (
              <div className="flex justify-center mb-6">
                <div className="inline-flex bg-gray-800 rounded-lg p-1">
                  {projectTabs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTab(index)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectTabs[currentTab]?.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {projectTabs.length > 1 && (
              <div className="flex justify-center mt-8">
                <div className="inline-flex">
                  <button
                    onClick={() => setCurrentTab(prev => (prev > 0 ? prev - 1 : prev))}
                    disabled={currentTab === 0}
                    className={`px-4 py-2 rounded-l-md text-sm font-medium ${
                      currentTab === 0
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Önceki
                  </button>
                  <button
                    onClick={() => setCurrentTab(prev => (prev < projectTabs.length - 1 ? prev + 1 : prev))}
                    disabled={currentTab === projectTabs.length - 1}
                    className={`px-4 py-2 rounded-r-md text-sm font-medium ${
                      currentTab === projectTabs.length - 1
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Sonraki
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Body;
