import { useEffect, useState } from 'react';
import './Header.scss';

export const Header = () => {
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
        <header>
            <section className="header-box">
                <a href="/">{(winWidth > 450) ? "Catoire-dev" : "Acceuil"}</a>
            </section>
            <section id="header-link-box">
                <a href="/about">A Propos</a>
                <a href="/projects">Projets</a>
                <a href="/contact">Contact</a>
            </section>
        </header>
    ) 
}