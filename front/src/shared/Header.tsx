import { useEffect, useState } from 'react';
import './Header.scss';

import { useLocation } from 'react-router-dom'

export const Header = () => {
    const location:string = useLocation().pathname;
    const homeLocation = import.meta.env.VITE_HOME_PATH;
    const aboutLocation = import.meta.env.VITE_ABOUT_PATH;
    const studLocation = import.meta.env.VITE_STUDIES_PATH;
    const carrerLocation = import.meta.env.VITE_CAREER_PATH;
    const projLocation = import.meta.env.VITE_PROJECTS_PATH;
    const contactLocation = import.meta.env.VITE_CONTACT_PATH;


    const [winWidth, setWinWitdh] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => {
            setWinWitdh(window.innerWidth);
        }

        window.addEventListener('resize', updateWidth);

        return (() => {
            window.removeEventListener('resize', updateWidth);
        })
    }, [winWidth])

    return (
        <header className={(winWidth >= 768 ? '' : 'border-head')} >
            <section className='header-box'>
                <a href="/">{(winWidth >= 768) ? "Catoire-dev" : "Acceuil"}</a>
            </section>
            <section id="header-link-box" className={(location === homeLocation) ? 'selected-item' : ''}>
                <a href={aboutLocation} className={location === aboutLocation ? 'selected-item' : ''}>A Propos</a>
                <a href={projLocation} className={location === projLocation ? 'selected-item' : ''}>Projets</a>
                <a href={studLocation} className={((location === carrerLocation || location === studLocation)) ? 'selected-item' : ''}>cv</a>
                <a href={contactLocation} className={location === contactLocation ? 'selected-item' : ''}>Contact</a>
            </section>
        </header>
    ) 
}