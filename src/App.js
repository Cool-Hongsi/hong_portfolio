import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/js/Landing';
import About from './components/js/About';
import Skill from './components/js/Skill';
import Project from './components/js/Project';

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" render={(routerProps) => (
          <Landing routerProps={routerProps} />
        )}/>
        <Route path="/about" render={(routerProps) => (
          <About routerProps={routerProps} />
        )}/>
        <Route path="/skill" render={(routerProps) => (
          <Skill routerProps={routerProps} />
        )}/>
        <Route path="/project" render={(routerProps) => (
          <Project routerProps={routerProps} />
        )}/>
      </Switch>
    )
  }
}