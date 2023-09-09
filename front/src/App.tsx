import './App.scss'
import './assets/styles/base.scss'
// Utils
import { routesInfo } from './utils/routeInfo'

// Extern
import { Route, Routes, useLocation } from 'react-router-dom'

// Page
import { About } from './pages/about/About'
import { Home } from './pages/home/Home'
import { Projects } from './pages/project/Projects'
import { ArrowBtn } from './shared/ArrowBtn'
import { Header } from './shared/Header'
import { Studies } from './pages/cv/studies/Studies'
import { Career } from './pages/cv/career/Career'
import { Contact } from './pages/contact/Contact'
import { ProjectDetails } from './pages/project/ProjectDetails/ProjectDetails'

function App() {
  const location:string = useLocation().pathname;

  return (
    <>
      <section className='box'>
        {
          (routesInfo[location] && routesInfo[location].prevText) && <ArrowBtn textBtn={routesInfo[location].prevText } bottomBtn={false} path={routesInfo[location].prevPath} />
        }
        <Header />
        <Routes>
          <Route path={import.meta.env.VITE_HOME_PATH} element={<Home />} />
          <Route path={import.meta.env.VITE_ABOUT_PATH} element={<About />} />
          <Route path={import.meta.env.VITE_PROJECTS_PATH} element={<Projects />} />
          <Route path={import.meta.env.VITE_PROJECTS_PATH + '/:projectId'} element={<ProjectDetails />} />
          <Route path={import.meta.env.VITE_STUDIES_PATH} element={<Studies />} />
          <Route path={import.meta.env.VITE_CAREER_PATH} element={<Career />} />
          <Route path={import.meta.env.VITE_CONTACT_PATH} element={<Contact />} />
        </Routes>
      </section>
      {
        (routesInfo[location] && routesInfo[location].nextText) && <ArrowBtn textBtn={routesInfo[location].nextText } bottomBtn={true} path={routesInfo[location].nextPath} />
      }
    </>
  )
}

export default App
