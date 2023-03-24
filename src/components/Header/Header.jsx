import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'


function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}><NavLink to="/"><img src="images/logo.svg" alt="logo" /></NavLink></div>
            <div className={style.loginButton}><NavLink to="/login"><button>Вход</button></NavLink></div>
            <div className={style.registerButton}><NavLink to="/registration"><button>Регистрация</button></NavLink></div>
        </div>
    );
}

export default Header;