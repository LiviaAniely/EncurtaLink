
import './styles.css';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <div className='container-error'>
            <img src="/notfound.svg" alt="Pagina nao encontrada" />
            <h1>Página não encontrada</h1>
            <Link to='/'>
                Voltar à tela inicial
            </Link>
        </div>
    );
}