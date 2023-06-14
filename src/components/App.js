import React from "react";
import './../styles/App.css';
import Page from "./PageLayout";
const App = () => {
  const Header=()=>{
    <h1>Welcome to my Website</h1>
  };
  const Footer=()=>{
    <h2>All right reserved</h2>
  };
  const Children=()=>{
    <h2>This is the Content of my Website</h2>
  };
  return (
    <div>
        <Page Header={Header} Children={Children} Footer={Footer}/>
    </div>
  )
}

export default App
