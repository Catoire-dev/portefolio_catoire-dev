import './About.scss'

import { useEffect, useState } from 'react';
// import { getApiData } from '../../api/getApiData';

import bio from '../../data/about.json';

export const About = () => {

    // const about_uri = import.meta.env.VITE_API_ABOUT_URI;
    // const [bio, setBio] = useState<string>('No bio Here.');

    // const getAbout = async () => {
    //     const data = await getApiData(about_uri);

    //     if (data)
    //         setBio(data);
    //     else
    //         console.log("Error getAbout");
    // }

    // useEffect(() => {getAbout()}, [bio])

    return (
        <main>
            <section className='box border-red title-box'>
                <h1>Qui suis-je?</h1>
            </section>
            <p id='about-description' 
                dangerouslySetInnerHTML={{ __html: bio.bio }}>
            </p>
        </main>
    )
}

