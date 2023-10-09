import './Projects.scss';
import data from '../../data/project.json';
import { ProjectsCard } from './ProjectCard/ProjectCard';
import { IProject } from '../../interface/IProject';

const projects: IProject[] = data.map((d: any) => ({
    id: d.id,
    name : d.name,
    period : d.period,
    customer: d.customer,
    description : d.description,
    short : d.short,
    img : d.img,
    thumbnail : d.thumbnail,
    link: d.link
}));


// import { useEffect, useState } from 'react';
// import { getApiData} from '../../api/getApiData';

export const Projects = () => {
    // const projectUri = import.meta.env.VITE_API_PROJECT_URI;
    // const [projects, setProjects] = useState<IProject[]>([]);

    // const getProjects = async () => {
    //     const data = await getApiData(projectUri);

    //     if (data)
    //         setProjects(data);
    //     else
    //         console.log("Error GetProject")
    // }

    // useEffect(() => {getProjects()}, []);

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
