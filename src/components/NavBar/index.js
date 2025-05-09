import { Link } from 'react-router-dom';
import './NavBar.css'
import './keyframe.css'

const NavBar = () => {
    return (
        <section className='navBar' >
            <div className='navBar-container'>
                <div className='nome'>
                    <h1>Victor Mendes</h1>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <a href='#sobre'>Sobre</a>
                        </li>
                        <li>
                            <a href='#skills'>Skills</a>

                        </li>
                        <li>
                            <a href='#projetos'>Projetos</a>
                        </li>
                        <li>
                            <a href='#contato'>Contato</a>
                        </li>
                        <li>
                            <Link to="/uploads">Uploads</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default NavBar