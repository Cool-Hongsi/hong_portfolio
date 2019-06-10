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
      // <Switch>
      //   <Route exact path="/" render={() => (
      //     <Landing />
      //   )}/>
      //   <Route path="/about" render={() => (
      //     <About />
      //   )}/>
      //   <Route path="/skill" render={() => (
      //     <Skill />
      //   )}/>
      //   <Route path="/project" render={() => (
      //     <Project />
      //   )}/>
      // </Switch>
      <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skill" component={Skill} />
      <Route exact path="/project" component={Project} />
      </div>

    )
  }
}