import "../StyleGlobal/index.scss"
import "./Style/desktop.scss"
import "./Style/resposive.scss"
import bresil from "./assets/img/bresil.png"
import france from "./assets/img/france.png"
import usa from "./assets/img/usa.png"
import { Link } from "react-router-dom"
import { FiAlignJustify } from "react-icons/fi";

export default function Header(){
    const headlResposive =() => {
        let btnUl = document.querySelector(".list-ul")
        if(btnUl !== null) {
            btnUl.classList.toggle("resposive-effect")
        }
    }
    return (
        <>
            <div className="container-header">
                <div className="container-header__box">
                    <div className="container-header__left">
                        <div className="resposive-btn" onClick={() => headlResposive()}><FiAlignJustify/></div>
                        <ul className="list-ul">
                            <li>
                                <Link className="btn-link" to="/"> Home</Link>
                            </li>
                            <li>
                                <Link className="btn-link" to="/"> MyIntro</Link>
                            </li>
                            <li>
                                <Link className="btn-link" to="/"> Portifolio</Link>
                            </li>
                            <li>
                                <Link className="btn-link linked" to="/"> Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="container-header__right">
                        <ul>
                            <li>
                                <Link className="flags-idioma"><img src={bresil} alt="flag bresil" /></Link>
                            </li>
                            <li>
                                <Link className="flags-idioma"><img src={france} alt="flag france" /></Link>
                            </li>
                            <li>
                            <Link className="flags-idioma"><img src={usa} alt="flag usa" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    )
}