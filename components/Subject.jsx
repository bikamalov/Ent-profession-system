import React from 'react'
import {Link} from "react-router-dom";
import Axios from "axios";
import path from "../settings";
import style from "./SecondSubject.module.css"
const Subject = (props)=>{
    let getSecondSubjects=()=>{
        var name = props.name;
        var bool=!props.store.state.isSubjectActive[props.name];
        Axios.get(path+'/api/subjects_2/'+props.id).then(res=>{
            props.store.setSecondSubjectsData(res.data)
            console.log(res.data)
        });
        props.store.setSubjectActive(name,bool)
    };
    return(
        <div className={props.store.state.isSubjectActive[props.name]? `${style.active}`:`${style.subjects1}`} onClick={getSecondSubjects}>
            <div ><p className={style.subject}>{props.name}</p></div>
        </div>
    )
}
export default Subject