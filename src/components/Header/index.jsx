import "../StyleGlobal/index.scss"
import "./Style/desktop.scss"   
import "./Style/resposive.scss"
import france from "./assets/img/france.png"
import usa from "./assets/img/usa.png"
import { Link } from "react-router-dom"
import { infoFr } from "../Idomes"
import { useContext } from "react"
import {ThemeLanguagem} from '../../providers/auth'

export default function Header(){
    const {langueValue , setLangueValue} = useContext(ThemeLanguagem)
     const headlLangueSet = (x) => {
        setLangueValue(x)
    }
    
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

    return langueValue === 1 ? (
        <>
            <div className="container-header">
                <div className="container-header__box">
                 {infoFr.map((value , index )=> (
                    <div className="container-header__left" key={index}>
                        <div className="resposive-btn" onClick={() => headlResposive()}>
                            <div className="line-1"></div>
                            <div className="line-2" ></div>
                            <div className="line-3"></div>
                        </div>
                            <ul className="list-ul">
                            <li>
                                <Link className="btn-link" to="#"> {value.fr.home}</Link>
                            </li>
                            <li>
                                <a href="#teste" className="btn-link"> {value.fr.intro}</a>
                            </li>
                            <li>
                                <Link className="btn-link" to="/"> {value.fr.porto}</Link>
                            </li>
                            <li>
                                <Link className="btn-link linked" to="/"> {value.fr.contato}</Link>
                            </li>
                            </ul>
                        
                    </div>
                         ))}
                    <div className="container-header__right">
                        <ul>

                            <li>
                                <Link className="flags-idioma" onClick={()=> headlLangueSet(1)}><img src={france} alt="flag france" /></Link>
                            </li>
                            <li>
                            <Link className="flags-idioma" onClick={()=> headlLangueSet(2) }><img src={usa} alt="flag usa" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
         ):( <>
            <div className="container-header">
                <div className="container-header__box">
                 {infoFr.map((value , index )=> (
                    <div className="container-header__left" key={index}>
                        <div className="resposive-btn" onClick={() => headlResposive()}>
                            <div className="line-1"></div>
                            <div className="line-2" ></div>
                            <div className="line-3"></div>
                        </div>
                       
                        <ul className="list-ul">
                            <li>
                                <Link className="btn-link" to="/"> {value.us.home}</Link>
                            </li>
                            <li>
                                <Link className="btn-link" to="/"> {value.us.intro}</Link>
                            </li>
                            <li>
                                <Link className="btn-link" to="/"> {value.us.porto}</Link>
                            </li>
                            <li>
                                <Link className="btn-link linked" to="/"> {value.us.contato}</Link>
                            </li>
                            </ul>
                        
                    </div>
                         ))}
                    <div className="container-header__right">
                        <ul>
                        <li>
                                <Link className="flags-idioma" onClick={()=> headlLangueSet(1)}><img src={france} alt="flag france" /></Link>
                            </li>
                            <li>
                            <Link className="flags-idioma" onClick={()=> headlLangueSet(2) }><img src={usa} alt="flag usa" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>);
        
}