import React from 'react';
import Navigation from './components/layout/Navbar';
import Users from './components/users/Users';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {


  render() {


    return (
      <div>
        <Navigation />
        <Container>
          <Users />
        </Container>

      </div>
    );
  }
}

export default App;
