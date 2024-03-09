// Constante
import constNav from '../../constants/nav/constNav';
// Link do React Router
import { Link } from 'react-router-dom';
// Estilo
import './header.css';
// Ícone
import Barra from '../../assets/icons/responsividade/bars-solid.svg';

import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = constNav();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    return (
        <>
        <header>
            <h1>RSO</h1>
            <div className="menu">
                <div>
                    <img onClick={toggleMenu} className='img' src={Barra} alt="" />
                </div>
                <nav>
                    <ul className={`ul ${isMenuOpen ? 'open' : ''}`}>
                        {navItems.map((item) => (
                            <li className='li' key={item.id}>
                                <Link to={item.url}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
        
        </>
    );
};

export default Header;
