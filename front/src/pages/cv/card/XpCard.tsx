import { IXpPro } from '../../../interface/IXpPro';
import '../cv.scss';

type CardProps = {
    data: IXpPro;
}

export const XpCard = ({data}:CardProps) => {
    console.log(data);
    
    return (
        <div className="box card-cv">
            <div className='cv-card-title'>
                <h2>{data.title}</h2>
                <p>{data.period}</p>
            </div>
            <i>{data.company} - {data.city}</i>

            <p className='cv-card-content' dangerouslySetInnerHTML={{__html: data.description}} />
        </div>
    )
}