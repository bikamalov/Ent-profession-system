import React from 'react'
import style from "./SecondSubject.module.css"
import {Link} from "react-router-dom";
import Info from "./Info";

const SecondSubject = (props)=>{
    let gotoNext = ()=>{
        props.store.setUpdateProfession(2);
        props.store.setUpdateSubjectId(props.id)
    }
    return(
        <div onClick={gotoNext} className={style.subjects2}>
        <div><p className={style.subject}>{props.name}</p></div>
        </div>
    )
}
export default SecondSubject