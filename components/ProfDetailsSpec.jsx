import React from 'react'
import style from './ProfDetailsSpec.module.css'
const ProfDetailsSpec = (props)=>{
    let getUniversityList = () =>{
        props.store.setCurrentSpecUni(props.name);
        console.log(props.store.state.specUniData)
    }

    return(
        <div className={style.spec}>
            <div onClick={getUniversityList} className={style.speciality}>{props.name}</div>
        </div>
    )
}
export default ProfDetailsSpec;