import React from 'react';
import Navigation from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  

  render() {


    return (
      <div>
        <Navigation />
        <UserItem />
      </div>
    );
  }
}

export default App;
