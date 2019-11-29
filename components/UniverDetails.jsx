import React from 'react'
import store from "../store.js"
import path from "../settings";
import Axios from "axios";
import Specialities from "./Specialities";
const UniverDetails =()=>{
        if (store.state.specialitiesData.length===0){
            Axios.get(path+'/api/university/'+store.state.univer.id).then(res=>{
                console.log(res.data)
                store.setSpecialities(res.data)
            })
        }

        let specialities_elements = store.state.specialitiesData.map(el=>(
            <Specialities
                store={store}
            id={el.id}
            name={el.name}
            code={el.code}
            kaz_ent={el.kaz_ent}
            rus_ent={el.rus_ent}
            />
        ))

        return(
            <div>
                <h1>{store.state.univer.name}</h1>
                {specialities_elements}
            </div>
        )
}
export default UniverDetails;