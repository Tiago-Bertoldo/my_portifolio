import Reseaux from '../../components/Reseaux'
import './Styles/desktop.scss'
import './Styles/resposive.scss'
import Intro from '../../components/Intro'
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
export default function Home(){
    return (
        <>
         <Header/>
        <div className="section-home" id='home'>
            <div className="container-home">
                <div className="container-home__reseaux">
                        <Reseaux/>
                </div>
                <div className="container-home__text">
                        <Intro/>
                </div>
                <div className="container-home__photo">
                        <Avatar/>
                </div>   
            </div>
        </div>

        <div className='sssss' id='teste'>
            <h2>NOVO USUARIO</h2>
        </div>

        </>
    )
}