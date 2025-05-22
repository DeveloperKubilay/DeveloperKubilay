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

// Define HomePage component before using it in the router
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
          // Reduce console output
          // console.log('Using cached GitHub data');
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
          <Certs />
          <Hobies />
          <Projects_Overview />
          <Contact />
        </>
      )}
    </>
  )
}

// Now we can use HomePage in our router configuration
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
  // Reduce console logs
  // console.log("Translations initialized, rendering app");
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
