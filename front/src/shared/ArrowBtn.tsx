import './ArrowBtn.scss'

type ArrowBtnProps = {
    textBtn: string;
    posBtn: string;
    path: string;
    idCss?: string;
    classCss?: string;
}


export const ArrowBtn = ({textBtn, posBtn, path, idCss, classCss}: ArrowBtnProps) => {
    const arrowImg = "/src/assets/arrow-btn-down.png";
    const altArrowImg = "Bouton suite";
    const btnClass = classCss ? `arrow-btn-${posBtn} ${classCss}` : `arrow-btn-${posBtn}`;
   
    return (
        <a id={idCss || 'arrow-btn'} href={path} className={btnClass}>
            <p>{textBtn}</p>
            <img src={arrowImg} alt={altArrowImg}/>
        </a>
    )
}