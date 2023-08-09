import './App.scss'
import './assets/styles/base.scss'
import { About } from './pages/about/About'

import { Home } from './pages/home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Projects } from './pages/project/Projects'

function App() {
  return (
    <>
      {/* <h1>{useLocation().pathname}</h1> */}

      <Routes>
        <Route path={import.meta.env.VITE_HOME_PATH} element={<Home />} />
        <Route path={import.meta.env.VITE_ABOUT_PATH} element={<About />} />
        <Route path={import.meta.env.VITE_PROJECTS_PATH} element={<Projects />} />
        {/* <Route path={import.meta.env.VITE_CAREER_PATH} element={<Career />} /> */}
        {/* <Route path={import.meta.env.VITE_STUDIES_PATH} element={<Studies />} /> */}
        {/* <Route path={import.meta.env.VITE_CONTACT_PATH} element={<Contact />} /> */}


      </Routes>

    </>
  )
}

export default App
