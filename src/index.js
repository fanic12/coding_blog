import React, { Dropdown } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home'
import Html from './posts/html/Html'
import Br_and_p from './posts/html/Br_and_p'
import Img from './posts/html/Img'
import A_href from './posts/html/A_href'
import Css from './posts/css/Css'
import Style from './posts/css/Style'
import Padding_and_margin from './posts/css/Padding_and_margin'
import Grid from './posts/css/Grid'
import Javascript from './posts/javascript/Javascript'
import Script from './posts/javascript/Script'
import If from './posts/javascript/If'
import While from './posts/javascript/While'
import Reactjs from './posts/reactjs/Reactjs'
import Props from './posts/reactjs/Props'
import State from './posts/reactjs/State'
import Map from './posts/reactjs/Map'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './styles/main.css'

ReactDOM.render(
  <BrowserRouter basename='/coding_blog'>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/html' component={Html} />
      <Route path='/img' component={Img} />
      <Route path='/br_and_p' component={Br_and_p} />
      <Route path='/a_href' component={A_href} />
      <Route path='/css' component={Css} />
      <Route path='/style' component={Style} />
      <Route path='/padding_and_margin' component={Padding_and_margin} />
      <Route path='/grid' component={Grid} />
      <Route path='/javascript' component={Javascript} />
      <Route path='/script' component={Script} />
      <Route path='/if' component={If} />
      <Route path='/while' component={While} />
      <Route path='/reactjs' component={Reactjs} />
      <Route path='/props' component={Props} />
      <Route path='/state' component={State} />
      <Route path='/map' component={Map} />
    </App>
  </BrowserRouter>,
  document.getElementById('root'),
  <Dropdown />
)
