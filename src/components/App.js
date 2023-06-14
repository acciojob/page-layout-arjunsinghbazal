import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Children from "./Children";
import Footer from "./Footer";
import Page from "./PageLayout";
const App = () => {
 
  return (
    <div>
        <Page Header={<Header/>} Footer={<Footer/>}>{<Children/>}</Page>
    </div>
  )
}

export default App
