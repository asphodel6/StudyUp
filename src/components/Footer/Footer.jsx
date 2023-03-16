import React from "react";
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.privacyPolicy}>Политика конфиденциальности</div>
            <div className={style.aboutUs}>О нас</div>
            <div className={style.termsOfUSe}>Пользовательское соглашение</div>
            <div className={style.technicalSupport}>Техническая поддержка</div>
        </div>
    );
}

export default Footer;