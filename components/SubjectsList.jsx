import React from 'react'
import Axios from "axios";
import path from "../settings";
import Subject from "./Subject";
import SecondSubject from "./SecondSubject";
import style from "./SubjectList.module.css"

const SubjectsList = (props)=>{
    if (props.store.state.subjectsData.length===0){
        Axios.get(path+'/api/subjects_1').then(res=>{
            props.store.setSubjectsData(res.data);
        })
    }
    let subjects_elements = props.store.state.subjectsData.map(el=>(
        <Subject
            store={props.store}
            id={el.id}
            name={el.name}
        />
    ))
    let secondSubjectsElements = props.store.state.secondSubjectsData.map(el=>(
        <SecondSubject
            store={props.store}
            id={el.id}
            name={el.name}
        />
    ))
    return(
        <div className={style.subjects}>
                <div className={style.list}>{subjects_elements}</div>
                <div className={style.list}>{secondSubjectsElements}</div>
        </div>
    )
}
export default SubjectsList;