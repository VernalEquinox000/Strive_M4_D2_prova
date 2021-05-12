import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

import NavBar from "./components/NavBar";
//import Home from "./components/Home";
import LatestRelease from "./components/latestrelease"
import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="Strive Library" />
      

        <LatestRelease props= {Fantasy}/>

        
        
      </>
    );
  }
}

export default App;