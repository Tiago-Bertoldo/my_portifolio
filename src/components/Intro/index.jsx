import './Style/desktop.scss'
import './Style/resposive.scss'
import { useContext } from 'react'
import {ThemeLanguagem} from '../../providers/auth'
import { infoFr } from "../Idomes"

export default function Intro() {
    const {langueValue} = useContext(ThemeLanguagem)


    return langueValue === 1 ? (
        <>
            {infoFr.map((value , index )=> (
            <div className='container-hello' key={index}>
                <div className='container-hello__text'>
                    <p>{value.fr.hello}</p>
                    <h2>{value.fr.name}</h2>
                    <p>{value.fr.metier}</p>
                </div>
                
            </div>
            ))}
        </>
         
    ): 
    (
        <>
        {infoFr.map((value , index )=> (
        <div className='container-hello' key={index}>
            <div className='container-hello__text'>
                <p>{value.us.hello}</p>
                <h2>{value.us.name}</h2>
                <p>{value.us.metier}</p>
            </div>
            
        </div>
        ))}
    </>

    )
}