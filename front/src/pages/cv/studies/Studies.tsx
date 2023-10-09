import '../cv.scss';
import data from '../../../data/studie.json';
import { StudCard } from '../card/StudCard';
import { IStudie } from '../../../interface/IStudie';

const studies: IStudie[] = data.map((d: any) => ({
    id: d.id,
    certificate : d.certificate,
    school : d.school,
    city : d.city,
    period : d.period,
    description : d.description,
    inProgress : d.inProgress
}));

// import { useEffect, useState } from 'react';
// import { getApiData } from '../../../api/getApiData';

export const Studies = () => {
    // const studieUri = import.meta.env.VITE_API_STUDIE_URI;
    // const [studies, setstudies] = useState<IStudie[]>([]);

    // const getstudies = async () => {
    //     const data = await getApiData(studieUri);

    //     if (data)
    //         setstudies(data);
    //     else
    //         console.log("Error Getstudie")    }

    // useEffect(() => {getstudies()}, []);

    // console.log("uri = ", studieUri);

    return (
        <main>
            <section className='box border-red title-box'>
                <h1>Mes formations</h1>
            </section>
            <section id="cv">
                { studies.map(stud => <StudCard data={stud} key={stud.id}/>) }
            </section>
        </main>
    )
}