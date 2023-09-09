import './ProjectDetails.scss';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApiData } from "../../../api/getApiData";
import DOMPurify from 'dompurify';
import { placeHolderImg } from '../../../utils/utils';
import { IProject } from '../../../interface/IProject';

export const ProjectDetails = () => {
    const {projectId} = useParams();
    const [proj, setProj] = useState<IProject | null>(null);
    const imgPath = "/public/projects-img/";


    const getProj = async () => {
        const projectUri = import.meta.env.VITE_API_PROJECT_URI;
        const data = await getApiData(projectUri + '/' + projectId);

        if (data)
            setProj(data);
        else
            console.log("Error GetProject");
    }
    console.log(proj);   

    useEffect(() => {getProj()}, [])

    return (
        <>
            {proj && 
                <main>
                    <Link id="back-btn" to={'/projects'}>Retour</Link>
                    <section id='project-details'>
                        <section>
                            <section>
                                <h2>{proj.name}</h2>
                                <section>
                                    <p>09/2001</p>
                                    <p>SuperCustomer</p>
                                    {/* <p>{proj.date}</p> */}
                                    {/* <p>{proj.customer}</p> */}
                                </section>
                            </section>
                            {proj && <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(proj.description)}}></div>}
                        </section>
                        <section>
                            <img src={imgPath + proj.img} onError={placeHolderImg} alt={"Miniature du project : " + proj.name } />
                        </section>
                    </section>

                </main>
            }
        </>
    )
}