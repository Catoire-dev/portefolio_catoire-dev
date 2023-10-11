import './ProjectDetails.scss';

// import { useEffect, useState } from "react";
// import { getApiData } from "../../../api/getApiData";
import data from '../../../data/project.json';

import { Link, useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
import { placeHolderImg } from '../../../utils/utils';
import { IProject } from '../../../interface/IProject';
import { ArrowBtn } from '../../../shared/ArrowBtn';

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

export const ProjectDetails = () => {
    const {projectId} = useParams();
    const proj = projects[projectId -1];

    console.table(proj);
    const imgPath = "/public/projects-img/";
    
    
    // const [proj, setProj] = useState<IProject | null>(null);


    // const getProj = async () => {
    //     const projectUri = import.meta.env.VITE_API_PROJECT_URI;
    //     const data = await getApiData(projectUri + '/' + projectId);

    //     if (data)
    //         setProj(data);
    //     else
    //         console.log("Error GetProject");
    // }
    // console.log(proj);   

    // useEffect(() => {getProj()}, [])

    return (
            <main className='box'>
            {/* <Link id="back-btn" to={'/projects'}>Retour</Link> */}
            <ArrowBtn textBtn='Retour' posBtn='left' path={import.meta.env.VITE_PROJECTS_PATH} idCss='btn-back' />
            {
                proj ?
                <>
                    <section className='border-black box' id='project-details'>
                        <section id='proj-title' className='box'>
                            <h2>{proj.name}</h2>
                            <p id='customer'>{proj.customer}</p>
                            <ArrowBtn textBtn='voir' posBtn='right' path='/' idCss='btn-see'/> 
                        </section>
                        <img id='cover' src={imgPath + proj.img} onError={placeHolderImg} alt={"Miniature du project : " + proj.name } />
                        <div id='description' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(proj.description)}} />
                    </section>
                </> :
                <>
                    <h1>Oups. Y'a rien ici.</h1>
                </>
            }
            </main>
    )
}