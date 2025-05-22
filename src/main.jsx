import { StrictMode, useState, useEffect, useRef, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import '../main.css'

import Nav from './components/main/Navi.jsx'
import Welcome from './components/main/Welcome_page.jsx'
import Body from './components/main/Overview.jsx'
import Projects_Overview from './components/main/Projects/Overview.jsx'
import CPanel from './cpanel.jsx'


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
  const [githubData, setGithubData] = useState({ main:{public_repos: 0} });
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

        if (cachedData && cachedTime && (currentTime - parseInt(cachedTime) < 1800000)) {
          console.log('Using cached GitHub data');
          setGithubData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
        
        const githubreq = await fetch('https://api.github.com/users/DeveloperKubilay');
        const githubdata = await githubreq.json();
        const commitsreq = await fetch('https://github-contributions-api.jogruber.de/v4/DeveloperKubilay');
        const commits = (await commitsreq.json())?.total;
        const data = {main:githubdata,commits:commits}
        
        localStorage.setItem('githubData', JSON.stringify(data));
        localStorage.setItem('githubDataTimestamp', currentTime.toString());
        
        setGithubData(data);
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
          <Projects_Overview />
        </>
      )}
    </>
  )
}

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(
  <div className="loading-overlay">
    <div className="loading-spinner"></div>
    <p>Loading translations...</p>
  </div>
);

i18nInitialized.then(() => {
  console.log("Translations initialized, rendering app");
  root.render(
    <StrictMode>
      <Suspense fallback={<LoadingAnimation />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cpanel" element={<CPanel />} />
            <Route path="/admin" element={<CPanel />} />
            <Route path="/manage" element={<CPanel />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
  );
}).catch(error => {
  console.error("Failed to initialize translations:", error);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cpanel" element={<CPanel />} />
          <Route path="/admin" element={<CPanel />} />
          <Route path="/manage" element={<CPanel />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
});
