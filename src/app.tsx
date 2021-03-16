import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navigation } from 'components';
import { Home, About, Projects, Contents } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contents/:id" component={Contents}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
