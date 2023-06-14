import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Children from "./Children";
import Footer from "./Footer";
import Page from "./PageLayout";
const App = () => {
 
  return (
    <div>
        <Page Header={<Header/>} Children={<Children/>} Footer={<Footer/>}/>
    </div>
  )
}

export default App
