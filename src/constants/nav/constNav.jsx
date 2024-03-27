import { useState } from 'react';

const ConstNav = () => {
    
    const [navItems] = useState([
        {id: 1, url: '/sobre', text: 'Sobre'},
        {id: 2, url: '/experienciaprofissional', text: 'Experiência Profissional'},	
        {id: 3, url: '/portfoliodev', text: 'Portfólio Dev'},	
        {id: 4, url: '/portfoliofotografia', text: 'Portfólio Foto'},	
        {id: 5, url: '/contato', text: 'Contato'}
    ]);

    return navItems
}

export default ConstNav;
