import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useTranslation } from 'react-i18next'; // Add i18n import

const Fullscreen = ({ projects = [], isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localProjects, setLocalProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation(); // Add translation hook
  
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Instead of fetching projects.json, get project details from translation files
      const mergedProjects = projects.map(githubProject => {
        // Get project details from the current language's translations
        const localDetails = t(`projects.${githubProject.name}`, { returnObjects: true });
        
        // If the translation exists and is not just the key string
        const hasTranslation = localDetails && typeof localDetails === 'object';
        
        return { 
          ...githubProject, 
          ...(hasTranslation ? localDetails : {}),
          // Fallback for description if not in translation
          description: hasTranslation && localDetails.description 
            ? localDetails.description 
            : githubProject.description || t('projectNoDescription')
        };
      });
      
      setLocalProjects(mergedProjects);
      setIsLoading(false);
    }
  }, [isOpen, projects, i18n.language, t]); // Add i18n.language as dependency to reload on language change
  
  if (!isOpen) return null;
  
  const currentProject = localProjects[currentIndex] || projects[currentIndex] || {};
  const totalProjects = localProjects.length || projects.length;
  
  const goToNext = () => {
    if (currentIndex < totalProjects - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalProjects - 1); 
    }
  };

  const getLanguage = () => {
    const lang = currentProject.language?.toLowerCase();
    if (!lang) return 'javascript';
    const langMap = {
      'c#': 'csharp',
      'c++': 'cpp',
      'javascript': 'javascript',
      'typescript': 'typescript',
      'python': 'python',
      'java': 'java',
      'html': 'html',
      'css': 'css',
      'php': 'php',
      'ruby': 'ruby',
      'go': 'go'
    };
    
    return langMap[lang] || 'javascript';
  };

  // Custom renderer for code blocks in markdown
  const CodeBlock = ({inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || '');
    const lang = match ? match[1] : getLanguage();
    
    return !inline ? (
      <SyntaxHighlighter
        language={lang}
        style={vscDarkPlus}
        className="rounded-lg text-sm my-4"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-gray-800 px-1 py-0.5 rounded text-blue-300" {...props}>
        {children}
      </code>
    );
  };

  // Custom renderer for images in markdown
  const ImageRenderer = ({src, alt, ...props}) => {
    return (
      <div className="my-4 flex justify-center">
        <img 
          src={src} 
          alt={alt || 'Project image'} 
          className="max-w-full rounded-lg shadow-lg border border-gray-700" 
          {...props} 
        />
      </div>
    );
  };

  // Custom heading renderer
  const HeadingRenderer = ({level, children}) => {
    const sizes = {
      1: "text-2xl font-bold text-blue-300 mt-6 mb-4",
      2: "text-xl font-bold text-blue-300 mt-5 mb-3",
      3: "text-lg font-semibold text-blue-300 mt-4 mb-2",
      4: "text-base font-semibold text-blue-300 mt-3 mb-2",
      5: "text-sm font-semibold text-blue-300 mt-3 mb-1",
      6: "text-xs font-semibold text-blue-300 mt-3 mb-1"
    };
    
    const Tag = `h${level}`;
    return <Tag className={sizes[level]}>{children}</Tag>;
  };

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 overflow-hidden flex flex-col">
      <div className="p-4 flex justify-end items-center border-b border-gray-700">
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="loading-spinner"></div>
          <p className="ml-2 text-gray-300">{t('loadingProjects')}</p>
        </div>
      ) : (
        <>
          <div className="flex-1 flex flex-col md:flex-row p-4 overflow-hidden">
            <div className="md:w-1/2 p-4 overflow-auto">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-4">
                {currentProject.name}
              </h1>
              
              <p className="text-xl text-gray-200 mb-6">
                {currentProject.description || t('projectNoDescription')}
              </p>
              
              {currentProject.longDescription && (
                <div className="prose prose-invert max-w-none mb-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">{t('detailedDescription')}</h3>
                  <p className="text-gray-300 whitespace-pre-line">{currentProject.longDescription}</p>
                </div>
              )}
              
              {/* Project metadata section */}
              <div className="mt-6 space-y-4">
                {currentProject.language && (
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">{t('language')}:</span>
                    <span className="bg-gray-800 text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-900/50">
                      <span className="inline-block w-2 h-2 rounded-full mr-1 bg-blue-400"></span>
                      {currentProject.language}
                    </span>
                  </div>
                )}
                
                {currentProject.topics && currentProject.topics.length > 0 && (
                  <div>
                    <span className="text-gray-400 block mb-2">{t('topics')}:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.topics.map((topic, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-900/60 text-blue-300 border-blue-700/50 rounded-full text-xs font-medium border"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-12">
                  {currentProject.html_url && (
                    <div className="flex space-x-4 mt-6">
                      <a 
                        href={currentProject.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors inline-flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      
                      <a 
                        href={`${currentProject.html_url}/fork`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors inline-flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        {t('fork')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right side - Markdown content with code examples */}
            <div className="md:w-1/2 p-4 overflow-auto mt-6 md:mt-0">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">{t('detailedInfo')}</h3>
              
              {currentProject.codeExample ? (
                <div className="prose prose-invert prose-blue max-w-none">
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]} 
                    components={{
                      code: CodeBlock,
                      img: ImageRenderer,
                      h1: ({...props}) => <HeadingRenderer level={1} {...props} />,
                      h2: ({...props}) => <HeadingRenderer level={2} {...props} />,
                      h3: ({...props}) => <HeadingRenderer level={3} {...props} />,
                      h4: ({...props}) => <HeadingRenderer level={4} {...props} />,
                      h5: ({...props}) => <HeadingRenderer level={5} {...props} />,
                      h6: ({...props}) => <HeadingRenderer level={6} {...props} />,
                      p: ({children, ...props}) => (
                        <p className="text-gray-300 mb-4" {...props}>{children}</p>
                      ),
                      ul: ({...props}) => <ul className="list-disc pl-6 mb-4 text-gray-300" {...props} />,
                      ol: ({...props}) => <ol className="list-decimal pl-6 mb-4 text-gray-300" {...props} />,
                      li: ({...props}) => <li className="mb-1" {...props} />,
                      a: ({href, children, ...props}) => (
                        <a href={href} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
                      )
                    }}
                  >
                    {currentProject.codeExample}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-lg p-6 text-gray-400 border border-gray-700">
                  <p className="text-center">{t('noDetailedInfo')}</p>
                  <p className="text-center text-sm mt-2">
                    {t('moreInfoOnGithub')}:
                    {currentProject.html_url && (
                      <a 
                        href={currentProject.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 ml-1 hover:underline"
                      >
                        {currentProject.name}
                      </a>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-700 flex justify-center items-center">
            <div className="flex items-center space-x-6">
              <button
                onClick={goToPrevious}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>{t('previousProject')}</span>
              </button>
              
              <span className="text-gray-400 text-lg px-4">{currentIndex + 1} / {totalProjects}</span>
              
              <button
                onClick={goToNext}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center"
              >
                <span>{t('nextProject')}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Fullscreen;
