import './Home.scss'
import { ArrowBtn } from '../../shared/ArrowBtn'
import { Header } from '../../shared/Header'


export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className='box border-red title-box'>
                    <h1>FullStack Web Developper</h1>
                    <p className='catchword'>think futur</p>
                </section>
                <p id='description'>Welcome to my website Im Cyril Catoire</p>
                <section id='bubble-box' className='box'>
                    <p className='bubble'>React</p>
                    <p className='bubble'>JavaScript</p>
                    <p className='bubble'>MySQL</p>
                    <p className='bubble'>Php</p>
                </section>
            </main>
            <ArrowBtn textBtn='Qui suis-je' bottomBtn={true} path='/about'/>
        </>
    )
}