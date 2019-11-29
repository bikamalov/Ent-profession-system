import React from 'react'
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";


const Header = ()=>{
    return(
        <nav>
            <ul className={style.header}>
                <li className={`${style.item} ${style.active}`}>
                    <NavLink to="/proffession" activeClassName={`${style.item} ${style.active}`}>
                        Мамандық
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink
                        to="/vuz"
                        activeClassName={`${style.item} ${style.active}`}
                    >
                        ЖОО туралы
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink
                        to="/orientation"
                        activeClassName={`${style.item} ${style.active}`}
                    >
                        Профориентация
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink
                        to="/login"
                        activeClassName={`${style.item} ${style.active}`}
                    >
                        Тіркелу
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Header;