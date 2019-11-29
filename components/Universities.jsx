import React from 'react'
import style from './Universities.module.css'
import path from "../settings";
import {Link} from "react-router-dom";
const Universities = (props)=>{


    return(
        <div className={style.universities}>
            <div>{props.name}</div>
        </div>
    )
}
export default Universities;