import React from 'react'
import style from './Info.module.css';
import Axios from "axios";
import path from "../settings";

const Info = (props)=>{
    let getMySpecialities = (event)=>{
        props.store.setUpdateProfession(4);
        console.log(props.store.state.currentCity);
        var body={
            language:event.target.language.value,
            score:event.target.score.value,
            quote:event.target.quote.checked,
            subjectId: props.store.state.subjectId,
            city_id:props.store.state.currentCity
        };
        event.preventDefault();
        Axios.post(path+"/api/search/",body).then(res=>{
            props.store.setProfessions(res.data);
            console.log(res.data)
        })
    };
    let previousPage = ()=>{
        props.store.setUpdateProfession(2);
    }


    return(
        <div className={style.info}>
            <form onSubmit={getMySpecialities} className={style.form}>
                <button onClick={previousPage} className={style.previous}>&#8249;</button>
            <div>
                <text>Выберите язык обучения</text>
                <input  className={style.radio} type="radio" name="language" value="kaz"/>Казахский язык
                <input type="radio" name="language" value="rus"/>Русский язык
            </div>

            <div>
                <text>Ваш балл Ент</text>
                <input
                    type="number" min="0" max="140" name="score" placeholder="Ваш балл ЕНТ"/>
            </div>
            <div>
                <div className={style.quote}>
                    <input type="checkbox" name="quote"/>Сельская квота
                </div>
            </div>
                <div>
                   <button type="submit">Узнать</button>
                </div>
            </form>
        </div>
    )
}
export default Info;