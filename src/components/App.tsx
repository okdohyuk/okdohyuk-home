import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from 'components/nav';
import Home from 'routes/home';
import Projects from 'routes/projects';
import About from 'routes/about';
import Contents from 'routes/contents';
import Footer from 'components/footer';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <div>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contents/:id" component={Contents}></Route>
            <Footer />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
