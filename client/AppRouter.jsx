import React, { Component } from "react";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Gallery from './components/Gallery.jsx';
import CorporateWork from './components/CorporateWork.jsx';
import ContactUs from './components/ContactUs.jsx';
export default class AppRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/gallery' component={Gallery}/>
          <Route path='/corporate' component={CorporateWork}/>
          <Route path='/contactus' component={ContactUs}/>
        </Switch>
      </HashRouter>
    );
  }
}
