import React from "react";
import style from './LoginPage.module.css'
import {validators} from "../../utils/validators/validators";

class LoginPage extends React.Component {
    onEmailChanged = (e) => {
        let email = e.target.value;
        this.props.updateEmail(email);
    }

    onPasswordChanged = (e) => {
        let password = e.target.value;
        this.props.updatePassword(password);
    }

    render() {
        return (
            <div className={style.loginPage}>
                <div className={style.title}>Вход в аккаунт</div>
                <form>
                    <div className={style.input1}>
                        <input
                            name="email"
                            placeholder="E-mail"
                            type="email"
                            onChange={this.onEmailChanged}
                            value={this.props.loginPage.email}>
                        </input>
                        <div className={style.error}>{validators(this.props.loginPage.email, 'email')}</div>
                    </div>
                    <div className={style.input2}>
                        <input
                            name="password"
                            placeholder="Пароль"
                            type="password"
                            onChange={this.onPasswordChanged}
                            value={this.props.loginPage.password}>
                        </input>
                        <div className={style.error}>{validators(this.props.loginPage.password, 'password')}</div>
                    </div>
                    <div className={style.rectangle}><img src="images/Rectangle2.svg" alt="Rectangle1"/></div>
                    <div className={style.line}><img src="images/Line1.svg" alt="Line1"/></div>
                    <div className={style.cat}><img src="images/cat2.svg" alt="cat2"/></div>
                    <div className={style.forgotPassword}><a href="/login">Забыли пароль?</a></div>
                    <div className={style.login}>
                        <button>Войти</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;