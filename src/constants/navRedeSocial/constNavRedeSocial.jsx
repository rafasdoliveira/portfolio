// Hook
import { useState } from 'react';

// Ícones das redes sociais
import Instagram from '../../assets/icons/redes-sociais/instagram.svg';
import LinkedIn from '../../assets/icons/redes-sociais/linkedin-in.svg';
import GitHub from '../../assets/icons/redes-sociais/github.svg';
import Unsplash from '../../assets/icons/redes-sociais/unsplash.svg';
import Youtube from '../../assets/icons/redes-sociais/youtube.svg';
import Tiktok from '../../assets/icons/redes-sociais/tiktok.svg';

const NavRedeSocial = () => {

    const [navSocial] = useState([
        { id: 1, src: Instagram, alt: 'Instagram ícone', url: 'https://instagram.com/rafasdoliveira' },
        { id: 2, src: LinkedIn,  alt: 'LinkedIn ícone',  url: 'https://www.linkedin.com/in/rafasdoliveira/' },
        { id: 3, src: GitHub,    alt: 'GitHub ícone',    url: 'https://github.com/rafasdoliveira' },
        { id: 4, src: Unsplash,  alt: 'Unsplash ícone',  url: 'https://unsplash.com/pt-br/@rafasdoliveira' },
        { id: 5, src: Youtube,   alt: 'Youtube ícone',   url: '' },
        { id: 6, src: Tiktok,    alt: 'Tiktok ícone',    url: '' },
    ])   

    return navSocial
};

export default NavRedeSocial;
