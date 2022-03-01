import './styles.css';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';


export default function Menu() {
    return (
        <div className="menu">

            <a className="social" href="https://www.instagram.com/livia_aniely88/">
                <BsInstagram size={24} color='#FFF'/>
            </a>

            <a className="social" href="https://github.com/LiviaAniely">
                <BsGithub size={24} color='#FFF'/>
            </a>

            <a className="social" href="https://www.linkedin.com/in/livia-aniely-de-oliveira-almeida/">
                <BsLinkedin size={24} color='#FFF'/>
            </a>

        </div>
    );
}