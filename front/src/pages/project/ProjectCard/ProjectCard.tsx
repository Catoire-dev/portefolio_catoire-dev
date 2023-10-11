import { Link } from 'react-router-dom';
import { IProject } from '../../../interface/IProject'
import { placeHolderImg } from '../../../utils/utils';
import '../Projects.scss'
import { ArrowBtn } from '../../../shared/ArrowBtn';


type ProjectCardProps = {
    project: IProject; 
}

export const ProjectsCard = ({project}: ProjectCardProps) => {
    // console.log(project.id);
    // const thumbPath = "/public/projects-img/";
    const thumbPath = "/projects-img/";
    // if (thumbPath + project.thumbnail) {
    //     console.log(thumbPath + project.thumbnail);
    // } 

    // /src/assets/placeholder-thumb.png

    return (
        <div className="project box">
            <div className='project-title'>
                <h2>{project.name}</h2>
                {/* <p>{project.period}</p> */}
                <ArrowBtn textBtn='Details' posBtn='right' path={`/projects/${project.id}`} />
            </div>
            <i>{project.customer}</i>
            <div className='project-content'>
                <Link to={`/projects/${project.id}`}>
                    <img src={thumbPath + project.thumbnail} onError={placeHolderImg} alt={"Miniature du project : " + project.name } />
                </Link>
                <p dangerouslySetInnerHTML={{__html: project.short}}></p>

            </div>
        </div>
    )
}