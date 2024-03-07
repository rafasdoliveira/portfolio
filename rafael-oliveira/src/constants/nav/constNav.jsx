import { useState } from 'react';

const ConstNav = () => {
    
    const [navItems] = useState([
        {id: 1, url: '/sobre', text: 'Sobre'},
        {id: 2, url: '/portfolio', text: 'Portfólio'},	
        {id: 3, url: '/contato', text: 'Contato'},	
        {id: 4, url: '/blog', text: 'Blog'},	
    ]);

    return navItems
}

export default ConstNav;
