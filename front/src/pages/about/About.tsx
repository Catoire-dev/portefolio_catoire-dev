import { useEffect, useState } from 'react';
import { getApiData } from '../../utils/getApiData';
import './About.scss'

export const About = () => {
    const about_uri = import.meta.env.VITE_API_ABOUT_URI;
    const [bio, setBio] = useState<string>('No bio Here.');

    useEffect(() => {
        getAbout();
    }, [bio])

    const getAbout = async () => {
        const data = await getApiData(about_uri);

        if (data)
            setBio(data);
        else
        console.log("Error getAbout");
    }
    console.log(bio);

    return (
        <>
            <main>
                <section className='box border-red title-box'>
                    <h1>Qui suis-je?</h1>
                </section>
                <p id='about-description'>
                    {/* {bio} */}
                </p>
            </main>
        </>
    )
}