import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../main.css' 

import Nav from './components/main/Navi.jsx'
import Welcome from './components/main/Welcome_page.jsx'
import Body from './components/main/Body.jsx'
import Projects_Overview from './components/main/Overview_projects.jsx'
import CPanel from './cpanel.jsx'

const HomePage = () => (
  <>
    <Nav />
    <Welcome />
    <Body />
    <Projects_Overview />
  </>
)

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
