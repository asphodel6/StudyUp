import React from "react";
import style from "./SubjectsPage.module.css"
import { NavLink } from "react-router-dom";

function SubjectsPage() {
    return(
        <div className={style.subjectsContainer}>
            <div>
                <div className={style.chooseSubject}>
                    <div className={style.subjectVector}><img src="images/vectorSubjects.svg" alt="main-vector"/></div>
                    <div className={style.subjectVectorTitle}>Выберите предмет</div>
                </div>
                <div className={style.star}><img src="images/star.svg" alt="star"/></div>
                <div className={style.bell}><img src="images/bell.svg" alt="bell"/></div>
                <div className={style.profile}><img src="images/profile.svg" alt="profile"/></div>
                <div className={style.catSubjects}><img src="images/catSubjects.svg" alt="catSubjects"/></div>
                <div className={style.subjectMath}><NavLink to="/math"><img src="images/math.svg" alt="math"/></NavLink></div>
                <div className={style.subjectRussianLanguage}><NavLink to="/russianLanguage"><img src="images/russianLanguage.svg" alt="russianLanguage"/></NavLink></div>
                <div className={style.subjectInformatics}><NavLink to="/informatics"><img src="images/informatics.svg" alt="informatics"/></NavLink></div>
                <div className={style.subjectOther}><NavLink to="/other"><img src="images/other.svg" alt="other"/></NavLink></div>
            </div>
        </div>
    );
}

export default SubjectsPage;