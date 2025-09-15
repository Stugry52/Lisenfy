import { useState } from 'react';

// Компонет - это просто функция которая возвращает JSX
import './Header.css';
function Header(){
    const websiteTitle = "Lisenfy - чил музон";
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLoginClick(){
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <header className="header">
            <div className="logo">{websiteTitle}</div>
            <button className="login-btn" onClick={handleLoginClick}>
                {isLoggedIn ? 'Выйти': 'Войти'}
            </button>
        </header>
    );
}

export default Header;