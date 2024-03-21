// Constante
import constNav from '../../constants/nav/constNav';
// Link do React Router
import { Link } from 'react-router-dom';
// Estilo
import './header.css';
// Ícone
import Barra from '../../assets/icons/responsividade/bars-solid.svg';
// Hooks
import { useEffect, useRef, useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const menuRef = useRef(null);   
    const navItems = constNav();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if(!isMenuOpen) return
        if(menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false)    
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])
    

    return (
        <>
        <header>
            <h1>
                <Link to={"/"}>
                RSO
                </Link>
            </h1>
            <div className="menu" ref={menuRef}>
                <div>
                    <img onClick={toggleMenu} className='img' srcSet={Barra} alt="" />
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
