import React from "react";
import style from './Main.module.css'
import { NavLink } from "react-router-dom";

function Main() {
    return (
        <div className={style.mainContainer}>
            <div>
                <div className={style.mainLogline}>
                    <div className={style.mainVector}><img src="images/main-vector.svg" alt="main-vector" /></div>
                    <div className={style.mainVectorText}>Что-то умное хз какой-то логлайн допустим</div>
                </div>
                <div className={style.mainDescription}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <div className={style.proceedButton}><NavLink to="/registration"><button>Приступить</button></NavLink></div>
            </div>
            <div className={style.mainPicture}><img src="images/main-picture.svg" alt="main-picture" /></div>
        </div>
    );
}

export default Main;