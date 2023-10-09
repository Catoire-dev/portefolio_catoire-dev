import { IStudie } from '../../../interface/IStudie';
import '../cv.scss';

type CardProps = {
    data: IStudie;
}

export const StudCard = ({data}:CardProps) => {
    console.log(data);
    
    return (
        <div className="box card-cv">
            <div className='cv-card-title'>
                <h2>{data.certificate}</h2>
                <p>{data.period}</p>
            </div>
            <i>{data.school} - {data.city}</i>

            <p className='cv-card-content' dangerouslySetInnerHTML={{__html: data.description}} />
        </div>
    )
}