import React from 'react';
import { connect } from 'react-redux'

// edit project components
import Map from "./project/body/detail-view/map";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import './App.scss';

const App = ({filter}) => {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Map />
          </Route>
        </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps
)(App);
