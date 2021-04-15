import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Navigation } from 'components';
import { Home, About, Projects, Contents, NotFound } from 'pages';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contents/:id" component={Contents}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
