import React, {Component, useState} from "react";
import ProjectList from "./ProjectList";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
    <div className="App">
     <ProjectList name="html" description="html project with e-commerce"/>
     <ProjectList name="css" description="css project with e-commerce"/>
     <ProjectList name="javsacript" description="javascript project with e-commerce"/>
     <ProjectList name="reactjs" description="reactjs project with e-commerce"/>
    </div>
    </div>
  )
}


export default App;
