import React from "react";
import style from './LoginPage.module.css'
import { NavLink } from "react-router-dom";


function LoginPage() {
    return (
        <div className={style.loginPage}>
        <div className={style.title}>Вход в аккаунт</div>
        <div className={style.textarea1}><textarea placeholder="E-mail"></textarea></div>
        <div className={style.textarea2}><textarea placeholder="Пароль"></textarea></div>
        <div className={style.rectangle}><img src="images/Rectangle2.svg" alt="Rectangle1" /></div>
        <div className={style.line}><img src="images/Line1.svg" alt="Line1" /></div>
        <div className={style.cat}><img src="images/cat2.svg" alt="cat2" /></div>
        <div className={style.forgotPassword}><a href="src/components/LoginPage">Забыли пароль?</a></div>
        <div className={style.login}><NavLink to="/subjects"><button>Войти</button></NavLink></div>
    </div>
    );
}

export default LoginPage;