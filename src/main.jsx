import { StrictMode, useState, useEffect, useRef, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import '../main.css'

import Nav from './components/Navi.jsx'
import Welcome from './components/Welcome_page.jsx'
import Body from './components/Overview.jsx'
import Projects_Overview from './components/Projects/Overview.jsx'
import CPanel from './cpanel.jsx'
import Hobies from './components/Hobies.jsx'
import Certs from './components/Certs.jsx'
import Contact from './components/Contact.jsx'

import { i18nInitialized } from './utils/i18n.js'

const LoadingAnimation = () => {
  const { t } = useTranslation();

  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>{t('loading')}</p>
    </div>
  );
};

const HomePage = () => {
  const [githubData, setGithubData] = useState({ main: { public_repos: 0 } });
  const [loading, setLoading] = useState(true);
  const fetchedRef = useRef(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        if (fetchedRef.current) return;
        fetchedRef.current = true;
        const cachedData = localStorage.getItem('githubData');
        const cachedTime = localStorage.getItem('githubDataTimestamp');
        const currentTime = new Date().getTime();

        let userData = null;
        let userCommits = null;
        let projectsData = [];

        if (cachedData && cachedTime  && (currentTime - parseInt(cachedTime) < 7200000)) {
          const parsedData = JSON.parse(cachedData);
          userData = parsedData.main;
          userCommits = parsedData.commits;
          projectsData = parsedData.projects;
        } else {
          const githubreq = await fetch('https://api.github.com/users/DeveloperKubilay');
          userData = await githubreq.json();
          const commitsreq = await fetch('https://github-contributions-api.jogruber.de/v4/DeveloperKubilay');
          userCommits = (await commitsreq.json())?.total;
          const projectsReq = await fetch('https://api.github.com/users/DeveloperKubilay/repos?sort=updated');
          projectsData = await Promise.all((await projectsReq.json())?.map(async (repo) => {
            try {
              const readmeRes = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`);
              if (!readmeRes.ok) return { ...repo, readme: null }; 
              const readmeJson = await readmeRes.json();
              
              // Improved decoding to handle UTF-8 properly
              let content;
              try {
                // Try to use the TextDecoder first for better UTF-8 support
                const base64 = readmeJson.content.replace(/\n/g, '');
                const binary = atob(base64);
                const bytes = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) {
                  bytes[i] = binary.charCodeAt(i);
                }
                content = new TextDecoder('utf-8').decode(bytes);
              } catch (e) {
                // Fall back to simple atob if TextDecoder fails
                content = atob(readmeJson.content);
              }
              
              return { ...repo, readme: content };
            } catch { return { ...repo, readme: null }; }
          }));

          const data = {
            main: userData,
            commits: userCommits,
            projects: projectsData
          };
          localStorage.setItem('githubData', JSON.stringify(data));
          localStorage.setItem('githubDataTimestamp', currentTime.toString());
        }

        setGithubData({ main: userData, commits: userCommits, projects: projectsData});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const [, forceUpdate] = useState({});
  useEffect(() => {
    const handleLanguageChanged = () => forceUpdate({});
    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Nav />
          <Welcome githubData={githubData} />
          <Body githubData={githubData} />
          <Certs />
          <Hobies />
          <Projects_Overview githubProjects={githubData} />
          <Contact />
        </>
      )}
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/cpanel" element={<CPanel />} />
      <Route path="/admin" element={<CPanel />} />
      <Route path="/manage" element={<CPanel />} />
    </>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(
  <div className="loading-overlay">
    <div className="loading-spinner"></div>
    <p>Loading translations...</p>
  </div>
);

i18nInitialized.then(() => {
  root.render(
    <StrictMode>
      <Suspense fallback={<LoadingAnimation />}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}).catch(error => {
  console.error("Failed to initialize translations:", error);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
});
