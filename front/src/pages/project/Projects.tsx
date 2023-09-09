import './Projects.scss';

import { useEffect, useState } from 'react';
import { getApiData} from '../../api/getApiData';
import { ProjectsCard } from './ProjectCard/ProjectCard';
import { IProject } from '../../interface/IProject';

export const Projects = () => {
    const projectUri = import.meta.env.VITE_API_PROJECT_URI;
    const [projects, setProjects] = useState<IProject[]>([]);

    const getProjects = async () => {
        const data = await getApiData(projectUri);

        if (data)
            setProjects(data);
        else
            console.log("Error GetProject")
    }

    useEffect(() => {getProjects()}, []);

    return (
        <main>
            <section className='box border-red title-box'>
                <h1>Mes Projets</h1>
            </section>
            <section id="project-list">
                { projects.map(proj => <ProjectsCard project={proj} key={proj.id}/>) } 
            </section>
        </main>
    )
}
