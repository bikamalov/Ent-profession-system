import React from 'react'
import Prof from "./Prof";
import style from "./ProfList.module.css"
const Proflist = (props)=>{
    let prof_elements = props.store.state.professionsData.map(el=>(
        <Prof
            category={el.category}
            description = {el.description}
            id={el.id}
            image={el.image}
            name={el.name}
            store={props.store}
        />
    ));
    let previousPage = ()=>{
        props.store.setUpdateProfession(3);
    };
    return(
        <div>
            <div className={style.titleOfProflist}>По вашему запросу найдено {props.store.state.professionsData.length}</div>
            <button onClick={previousPage} className={style.previous}>&#8249;</button>
        <div className={style.proflist}>
            {prof_elements}
        </div>
        </div>
    )
}
export default Proflist