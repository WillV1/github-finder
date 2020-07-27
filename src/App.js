import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  //Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })
  }

  //Get a single Github user

  getUser = async (login) => {
    this.setState({ loading: true });

    const res = await axios
      .get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false })
  }

  //Get users repos

  getUserRepos = async (login) => {
    this.setState({ loading: true });

    const res = await axios
      .get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ repos: res.data, loading: false })
  }


  //Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  //Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 2000)
  }
  render() {
    const { users, user, repos, loading } = this.state;

    return (
      <Router>
        <div>
          <Navigation />
          <Container>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert} />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User 
                {...props} 
                getUser={this.getUser}
                getUserRepos={this.getUserRepos}
                user={user} 
                repos={repos}
                loading={loading} />
              )}/>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
