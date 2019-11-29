import React from 'react'
import path from "../settings";
import style from "./Prof.module.css"
import {Link} from "react-router-dom";
import Axios from "axios";
const Prof = (props)=>{
    var img_link = path+'/media/'+props.image;
    var style_image = {
        'backgroundImage': 'url('+img_link+')',
        'height':'200px',
    };


    let saveProf=()=>{
        props.store.setCurrentProfession(props.id)
        Axios.post(path+'/api/profession/',{
            prof_id:props.id,
            city_id:props.store.state.currentCity
        }).then(res=>{
            props.store.setProfDetailsData(res.data)
            console.log(res.data)
        })
    }

    return(

        <div onClick={saveProf} className={style.prof}>
            <Link to={"/proffession/"+props.id}>
            <div style={style_image}></div>
            <div className={style.inner_prof}>
                <div className={style.title}>{props.name}</div>
                <div className={style.category}>{props.category}</div>
                <div className={style.description}>{props.description}</div>
                <div>{props.spec_code}</div>
                <div>{props.spec_name}</div>
            </div>
            {/*<div>{props.id}</div>*/}
            </Link>
        </div>

    )
}
export default Prof