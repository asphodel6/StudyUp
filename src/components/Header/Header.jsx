import React from "react";
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}><img src="images/logo.svg" alt="logo" /></div>
            <div className={style.loginButton}><button>Вход</button></div>
            <div className={style.registerButton}><button>Регистрация</button></div>
        </div>
    );
}

export default Header;