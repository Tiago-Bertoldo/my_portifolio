import './Styles/desktop.scss'
import './Styles/resposive.scss'
import { FiInstagram } from 'react-icons/fi';
import { AiFillGithub , AiFillLinkedin} from 'react-icons/ai';


export default function Reseaux(){
    return (
        <>
           <div className="section-reseaux">
                <div className='section-reseaux__container'>
                    <div className='reseaux'>
                        <ul>
                            <li>
                                <a className='btn-linkedin' href="https://www.linkedin.com/in/tiago-bertoldo-6021a61a8/" target="_blank" rel="noopener noreferrer">{<AiFillLinkedin/>}</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_thbertoldo/" target="_blank" rel="noopener noreferrer">{<FiInstagram/>}</a>
                            </li>
                            <li>
                                <a href="https://github.com/sadberto" target="_blank" rel="noopener noreferrer">{<AiFillGithub/>}</a>
                            </li>
                        </ul>
                    </div>

                </div>
           </div>
        </>
    )
}