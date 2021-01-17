import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './nav';
import Home from '../routes/home';
import Projects from '../routes/projects';
import About from '../routes/about';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
