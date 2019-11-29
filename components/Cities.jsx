import React from 'react'
import style from './Cities.module.css'
import path from "../settings";
import Axios from "axios";
const Cities = (props)=>{
    let selectCity = path+'/api/city/'+props.id;
    let reqUniversities = ()=>{
       /* Axios.get(selectCity).then(res=>{
            props.store.setUniversities(res.data)
            console.log(res.data)
        })*/
        props.store.setUpdateProfession(3);
        props.store.setCurrentCity(props.id)
    }

    return(
        <div className={style.city}>
            <div className={style.cities} onClick={reqUniversities}>{props.name}</div>
        </div>


    )
}
export default Cities