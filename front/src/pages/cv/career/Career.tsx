import '../cv.scss';
import data from '../../../data/xpPro.json';
import { XpCard } from '../card/XpCard';
import { IXpPro } from '../../../interface/IXpPro';

const xpPros: IXpPro[] = data.map((d: any) => ({
    id: d.id,
    title : d.title,
    company : d.school,
    city : d.city,
    period : d.period,
    description : d.description,
    inProgress : d.inProgress
}));


// import { useEffect, useState } from 'react';
// import { getApiData } from '../../../api/getApiData';

export const Career = () => {
    // const xpProUri = import.meta.env.VITE_API_XPPRO_URI;
    // const [xpPros, setxpPros] = useState<IXpPro[]>([]);

    // const getxpPros = async () => {
    //     const data = await getApiData(xpProUri);

    //     if (data)
    //         setxpPros(data);
    //     else
    //         console.log("Error GetxpPro")    }

    // useEffect(() => {getxpPros()}, []);

    // console.log("uri = ", xpProUri);

    return (
        <main>
            <section className='box border-red title-box'>
                <h1>Mes experiences professionnelles</h1>
            </section>
            <section id="cv">
                { xpPros.map(xp => <XpCard data={xp} key={xp.id}/>) } 

            </section>
        </main>
    )
}

