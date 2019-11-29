import React from 'react'
import Map from "./Map";
import style from "./Proffession.module.css"
import SubjectsList from "./SubjectsList";
const Proffession = (props)=>{
    console.log(props.store.state.titleOfMap);



    return(
        <div className={style.body}>
            <div><text className={style.titleOfSubject}></text></div>
            <SubjectsList store={props.store}/>
{/*
        <div className={style.map}><Map store={props.store}/></div>*!/
*/}
        </div>
    )
}
export default Proffession;