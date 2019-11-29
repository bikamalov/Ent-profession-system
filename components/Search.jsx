import React from 'react';
import Proffession from "./Proffession";
import Info from "./Info";
import Proflist from "./ProfList";
import Map from "./Map";


const Search = (props) => {


    switch (props.store.state.professionComponent) {
        case 1:
            return <Proffession store={props.store}/>
        case 2:
            return <Map store={props.store}/>
        case 3:
            return <Info store={props.store}/>
        case 4:
            return <Proflist store={props.store}/>

    }

        
}

export default Search;