import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Html from "./topic/Html";
import Br_and_p from "./components/HTML/Br_and_p";
import Img from "./components/HTML/Img";
import A_href from "./components/HTML/A_href";
import Css from "./topic/Css";
import Style from "./components/CSS/Style";
import Padding_and_margin from "./components/CSS/Padding_and_margin";
import Grid from "./components/CSS/Grid";
import Javarscript from "./topic/Javarscript";
import Script from "./components/JAVARSCRIPT/Script";
import If from "./components/JAVARSCRIPT/If";
import While from "./components/JAVARSCRIPT/While";
import Reactjs from "./topic/Reactjs";
import Props from "./components/REACTJS/Props";
import State from "./components/REACTJS/State";
import Map from "./components/REACTJS/Map";
import Bbibbi from "./Bbibbi.png";

import Sidebar from './components/navbar/Sidebar';

function App() {
  return (
        <div>
          <div className="imgsituate">
            <Link to="/">
            <img src={Bbibbi} alt={Bbibbi} width="100px" height="100px" id="imgshape"/>
            </Link>
          </div>
          <h1><Link className="nav" to="/">
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />Fanic12 Coding Blog
        </Link></h1>
        <div style={{display: "flex", flexDirection: "row", border: "1px solid gray", marginRight:"33.2rem", marginLeft:"28rem"}}>
            <Sidebar />
            <BrowserRouter basename="/coding_blog">
            <Switch>
                <Route exact path="/" component={Home} />   
                <Route path="/html" component={Html} />
                <Route path="/img" component={Img} />
                <Route path="/br_and_p" component={Br_and_p} />
                <Route path="/a_href" component={A_href} />
                <Route path="/css" component={Css} />
                <Route path="/style" component={Style} />
                <Route path="/padding & margin" component={Padding_and_margin} />
                <Route path="/grid" component={Grid} />
                <Route path="/javarscript" component={Javarscript} />
                <Route path="/script" component={Script} />
                <Route path="/if" component={If} />
                <Route path="/while" component={While} />
                <Route path="/reactjs" component={Reactjs} />
                <Route path="/props" component={Props} />
                <Route path="/state" component={State} />
                <Route path="/map" component={Map} />
            </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}



export default App;