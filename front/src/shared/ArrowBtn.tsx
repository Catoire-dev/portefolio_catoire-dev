import './ArrowBtn.scss'

type ArrowBtnProps = {
    textBtn: string;
    bottomBtn: boolean;
    path: string;
}

export const ArrowBtn = ({textBtn, bottomBtn, path}: ArrowBtnProps) => {
    const arrowImg = "/src/assets/arrow-btn-down.png";
    const altArrowImg = "Bouton suite"
    const btnClass = (bottomBtn ? "arrow-btn-down" : "arrow-btn-up") + " box";

    return (
        <a href={path} className={btnClass}>
            <p>{textBtn}</p>
            <img src={arrowImg} alt={altArrowImg}/>
        </a>
    )
}