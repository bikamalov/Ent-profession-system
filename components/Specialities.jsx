import React from 'react'
import style from './Speciality.module.css'
import Axios from "axios";
import path from "../settings";
const Specialities = (props) =>{
    let id = props.id;
    let saveSpeciality=()=>{
        Axios.get(path+'/media/').then(res=>{
           props.store.setCurrentSpec(res.data)
            console.log(res.data)
        })
       // props.store.setCurrentSpec(id)
    }
    return(
        <div onClick={saveSpeciality} className={style.speciality}>
            <h4>{props.name}</h4>
            <h5>{props.code}</h5>
            <h6>Каз ент:{props.kaz_ent}</h6>
            <h6>{'Рус ент:' + props.rus_ent}</h6>

        </div>
    )
}
export default Specialities