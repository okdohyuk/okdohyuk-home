import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from 'components';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Projects = lazy(() => import('pages/Projects'));
const Contents = lazy(() => import('pages/Contents'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={''}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contents/:id" component={Contents} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
