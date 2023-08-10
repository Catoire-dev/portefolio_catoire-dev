import '../cv.scss'
import { CvCard } from '../card/CvCard'

export const Career = () => {
    return (
        <main>
            <section className='box border-red title-box'>
                <h1>Mes experiences professionnelles</h1>
            </section>
            <section id="cv">
                <CvCard />
                <CvCard />
                <CvCard />
                <CvCard />
            </section>
        </main>
    )
}

