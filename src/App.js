import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/js/Landing';
import About from './components/js/About';
import Skill from './components/js/Skill';
import Project from './components/js/Project';

export default class App extends React.Component{
  render(){
    return(
      <Router basename="/hong_portfolio">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/skill" component={Skill} />
          <Route path="/project" component={Project} />
        </Switch>
      </Router>
    )
  }
}