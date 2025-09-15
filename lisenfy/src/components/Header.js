// Компонет - это просто функция которая возвращает JSX
import './Header.css';
function Header(){
    const websiteTitle = "Lisenfy - чил музон";
    const currentUsert = {
        name: "Олег",
        isLoggedIn: false
    };

    function handleLoginClick(){
        alert(currentUsert.isLoggedIn ? 'До свидание': 'Добро пожаловать');
    }

    return(
        <header className="header">
            <div className="logo">{websiteTitle}</div>
            <button className="login-btn" onClick={handleLoginClick}>
                {currentUsert.isLoggedIn ? 'Выйти': 'Войти'}
            </button>
        </header>
    );
}

export default Header;