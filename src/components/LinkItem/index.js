import './styles.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({closeModal, content}){

    async function copyLink(){
        await navigator.clipboard.writeText(content.link);
    }
    return(
        <div className='container-modal'>
            
            <header className='header-modal'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#000'/>
                </button>
            </header>

            
            <span>{content.long_url}</span>

            
            <button className='link-modal' onClick={copyLink}>
                    {content.link}
                    <FiClipboard size={20} color='#260C1A'/>
                </button>

        </div>
    );
}