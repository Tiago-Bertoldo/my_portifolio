import './Style/desktop.scss'
import './Style/resposive.scss'
import myAvatar from './assets/avatar.jpg'

export default function Avatar() {
    return (
        <>
        <div className='container-avatar'>
            <div className='container-avatar__config'>
                <img src={myAvatar} alt="My avatar website" />
            </div>
            
        </div>
        </>
    ) 
}