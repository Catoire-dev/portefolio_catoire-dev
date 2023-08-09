import { ArrowBtn } from "../../shared/ArrowBtn"
import { Header } from "../../shared/Header"

export const Projects = () => {
    return (
        <>
            <ArrowBtn textBtn="Qui suis-je" bottomBtn={false} path="/about" />
            <Header />
            <main>

            </main>
            <ArrowBtn textBtn="Mon parcours" bottomBtn={false} path="/about" />
        </>
    )
}