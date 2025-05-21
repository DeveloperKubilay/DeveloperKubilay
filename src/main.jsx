import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../main.css' 

import Nav from './components/main/nav.jsx'
import Welcome from './components/main/welcome.jsx'
import Body from './components/main/body.jsx'
import Projects_Overview from './components/main/Overviewprojects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Welcome />
    <Body />
    <Projects_Overview />
  </StrictMode>,
)
