import '../cv.scss'
import { CvCard } from '../card/CvCard'

export const Studies = () => {
    return (
        <main>
            <section className='box border-red title-box'>
                <h1>Mes formations</h1>
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