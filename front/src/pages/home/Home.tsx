import './Home.scss'

export const Home = () => {
    return (
        <main id='main-home'>

            <section className='box border-red title-box'>
                <h1>FullStack Web Developper</h1>
                <p className='catchword'>think futur</p>
            </section>

            <section id="home-description">
                <p>Welcome to my website</p>
                <p>Im Cyril Catoire</p>
            </section>

            <section id='bubble-box' className='box'>
                <p className='bubble' id='react-bb'>React</p>
                <p className='bubble' id='js-bb'>JavaScript</p>
                <p className='bubble' id='nodejs-bb'>NodeJs</p>
                <p className='bubble' id='sql-bb'>MySQL</p>
                <p className='bubble' id='php-bb'>Php</p>
                <p className='bubble' id='symf-bb'>symfony</p>
                {/* <p className='bubble' id='test-bb'>test</p> */}
            </section>
        </main>
    )
}