import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/HomeComp";
import Apps from "./components/AppComp";
import Load from "./components/LoadComp";
import Skills from "./components/SkillTreeComp";
import CMD from "./components/CMDComp";
import './App.css';
import './components/styles/main.css';
import './components/styles/hero.css';

function App() {
  return (
    <Router>
      <Load/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/apps" component={Apps} />
        </Switch>
        <CMD/>
    </Router>
    );
}

export default App;