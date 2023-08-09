import { ArrowBtn } from '../../shared/ArrowBtn'
import { Header } from '../../shared/Header'
import './About.scss'

export const About = () => {
    return (
        <>
            <ArrowBtn textBtn='Acceuil' bottomBtn={false} path='/' />
            <Header />

            <main>
                <section className='box border-red title-box'>
                    <h1>Qui suis-je?</h1>
                </section>
                <p id='description'>Welcome to my website Im Cyril Catoire</p>

            </main>
            <ArrowBtn textBtn='Mes projets' bottomBtn={true} path='/projects'/>
        </>
    )
}