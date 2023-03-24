import React from "react";
import { NavLink } from "react-router-dom";
import style from './RegistrationPage.module.css'


function RegistrationPage() {
    return (
        <div className={style.signUpPage}>
            <div className={style.title}>Создать аккаунт</div>
            <div className={style.textarea1}><textarea placeholder="Имя пользователя"></textarea></div>
            <div className={style.textarea2}><textarea placeholder="E-mail"></textarea></div>
            <div className={style.textarea3}><textarea placeholder="Пароль"></textarea></div>
            <div className={style.rectangle}><img src="images/Rectangle1.svg" alt="Rectangle1" /></div>
            <div className={style.line}><img src="images/Line1.svg" alt="Line1" /></div>
            <div className={style.cat}><img src="images/cat2.svg" alt="cat2" /></div>
            <div className={style.login}>Уже есть аккаунт? <NavLink to="/login">Войти</NavLink></div>
            <div className={style.checkbox}><input type="checkbox" />
                Я принимаю <a href="">условия пользовательского соглашения</a>
                <br />        и даю <a href="">согласие на обработку персональных данных</a></div>
            <div className={style.signUp}><button>Зарегистрироваться</button></div>
        </div>
    );
}

export default RegistrationPage;