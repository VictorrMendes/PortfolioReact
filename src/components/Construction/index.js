import './Construction.css'
import { Link } from 'react-router-dom';

const Construction = () => {
    return (
        <div className='construction'>
                <h1>Em construção</h1>
                <h3>Em breve novidades</h3>
                <Link className='link' to="/">Voltar</Link>
        </div>
    )
}

export default Construction