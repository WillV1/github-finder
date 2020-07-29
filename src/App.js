import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

    return (
      <GithubState>
      <AlertState>
      <Router>
        <div>
          <Navigation />
          <Container>
            <Alert />
            <Switch>
              <Route exact path="/"  component={Home}/>
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

export default App;
