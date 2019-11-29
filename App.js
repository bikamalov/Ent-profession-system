import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Map from "./components/Map";
import Proffession from "./components/Proffession";
import UniverDetails from "./components/UniverDetails";
import SubjectsList from "./components/SubjectsList";
import Info from "./components/Info";
import Search from "./components/Search";
import ProfDetails from "./components/ProfDetails";

function App(props) {
  return (
      <BrowserRouter>
    <div className="App">
      <Header/>
         <Route exact path="/proffession" render={()=><Search store={props.store}/>}/>
         <Route exact path="/proffession/:profId" render={()=><ProfDetails store={props.store} />}/>
      <Route exact path="/university/:univerId" component={UniverDetails}/>
      <Route exact path="/vuz" render={()=><Map store={props.store}/>}/>

    </div>
      </BrowserRouter>
  );
}

export default App;
