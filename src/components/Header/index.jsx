import "../StyleGlobal/index.scss"
import "./Style/desktop.scss"   
import "./Style/resposive.scss"
import bresil from "./assets/img/bresil.png"
import france from "./assets/img/france.png"
import usa from "./assets/img/usa.png"
import { Link } from "react-router-dom"
import setLangue from "../../setLangueParametres"

export default function Header(){

    setLangue()
        
    const headlResposive =() => {
        let btnUl = document.querySelector(".list-ul")
        let btnLineUp = document.querySelector(".resposive-btn")

        if(btnUl !== null) {
            btnUl.classList.toggle("resposive-effect")
            btnLineUp.classList.toggle("toggle")
        }else {
            btnUl.classList.remove("resposive-effect")
        }
    }

    return (
        <>
            <div className="container-header">
                <div className="container-header__box">
                    <div className="container-header__left">
                        <div className="resposive-btn" onClick={() => headlResposive()}>
                            <div className="line-1"></div>
                            <div className="line-2" ></div>
                            <div className="line-3"></div>
                        </div>
                        
                        
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