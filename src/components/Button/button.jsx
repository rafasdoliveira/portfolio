import './button.css'

import { useHistory } from 'react-router-dom';

const Button = ({ texto, to, external }) => {
    const history = useHistory();

    const handleClick = () => {
        if (external) {
            window.open(to, '_blank');
        } else {
            history.push(to);
        }
    };

    return (
        <>
            <button className="button" onClick={handleClick}>{texto}</button>
        </>
    );
};

export default Button
