import { StrictMode, useState, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../main.css'

import Nav from './components/main/Navi.jsx'
import Welcome from './components/main/Welcome_page.jsx'
import Body from './components/main/Body.jsx'
import Projects_Overview from './components/main/Overview_projects.jsx'
import CPanel from './cpanel.jsx'

const HomePage = () => {
  const [githubData, setGithubData] = useState({ public_repos: 0 });
  const fetchedRef = useRef(false);
  
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
          return;
        }
        
        // Otherwise fetch fresh data
        const response = await fetch('https://api.github.com/users/DeveloperKubilay');
        const data = await response.json();
        console.log('GitHub data fetched and cached'); 
        
        // Cache the data with current timestamp
        localStorage.setItem('githubData', JSON.stringify(data));
        localStorage.setItem('githubDataTimestamp', currentTime.toString());
        
        setGithubData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <>
      <Nav />
      <Welcome githubData={githubData} />
      <Body githubData={githubData} />
      <Projects_Overview />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cpanel" element={<CPanel />} />
        <Route path="/admin" element={<CPanel />} />
        <Route path="/manage" element={<CPanel />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
