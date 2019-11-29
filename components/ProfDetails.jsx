import React from 'react'
import path from "../settings";
import style from "./ProfDetails.module.css"
import { Grid, Container } from "@material-ui/core";
import {Link} from "react-router-dom";
import ProfDetailsSpec from "./ProfDetailsSpec";
import Universities from "./Universities";
const ProfDetails = (props)=>{
    var img_link = path+'/media/'+props.store.state.currentProfession.image;
    var background_img = {
        padding: "0",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(" + img_link+ ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        /*height: "94.1vh"*/
    }
    var style_image = {
        backgroundImage: 'url('+img_link+')',
        height:'265px',
        width:'400px',
        backgroundRepeat:'no-repeat'
    };
    var center = {
        textAlign: "center"
    };

    let spec_elements = props.store.state.profDetailsData.map(el=>(
        <ProfDetailsSpec
            name={el.name}
            store={props.store}
        />
    ))

    let specUni_elements = props.store.state.specUniData.map(el=>(
        <Universities
            name={el}
        />
    ))

    return(
            <div className={style.body} style={background_img}>
                <Container>
                    <div className={style.container}>
                    <Grid className={style.space} style={center}>
                        <div style={style_image} className={style.poster} />
                    </Grid>
                    <Grid className={style.space} >
                        <h1>{props.store.state.currentProfession.name}</h1>
                        <h2>{props.store.state.currentProfession.category}</h2>
                        <p>{props.store.state.currentProfession.description}</p>
                    </Grid>
                    </div>
                </Container>

                <div>{spec_elements}</div>
                <div>{specUni_elements}</div>
            </div>
    )
}
export default ProfDetails