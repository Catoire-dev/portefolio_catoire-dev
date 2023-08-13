import './Projects.scss';

import { ProjectsCard } from './ProjectCard/ProjectCard';

export const Projects = () => {
    return (
        <main>
            <section className='box border-red title-box'>
                <h1>Mes Projets</h1>
            </section>
            <section id="project-list">
                <ProjectsCard />
                <ProjectsCard />
                {/* <ProjectsCard /> */}
            </section>
        </main>
    )
}