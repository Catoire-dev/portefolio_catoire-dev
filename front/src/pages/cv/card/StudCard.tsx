import { IStudie } from '../../../interface/IStudie';
import './CvCard.scss';

type CardProps = {
    data: IStudie;
}

export const StudCard = ({data}:CardProps) => {
    console.log(data);
    
    return (
        <div className="box card-cv">
            <div className='cv-card-title'>
                <h2>{data.certificate}</h2>
                <p>{data.inProgress ? "En cours" : data.period}</p>
            </div>
            <i><span id='company'>{data.school}</span> - <span id='city'>{data.city}</span></i>


            <p className='cv-card-content' dangerouslySetInnerHTML={{__html: data.description}} />
        </div>
    )
}