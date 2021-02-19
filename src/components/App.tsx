import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from 'components/nav';
import Home from 'routes/home';
import Projects from 'routes/projects';
import About from 'routes/about';
import Contents from 'routes/contents';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contents/:id" component={Contents}></Route>
      </Switch>
    </Router>
  );
}

export default App;
