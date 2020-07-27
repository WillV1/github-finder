import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import UserCard from './UserCard';
import Repos from '../repos/Repos';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './User.css'


import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }

    render() {
        const { name, avatar_url, location, bio, blog, login, html_url, company, hireable } = this.props.user;

        const { loading } = this.props;

        const {repos} = this.props;

        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back to Search
              </Link>
              Hireable: { ' '}
                {hireable ? 
                    <FontAwesomeIcon icon={faCheck} />
                 : <FontAwesomeIcon icon={faTimesCircle} />
                    }
                <div className="user">
                <UserCard
                    image={avatar_url}
                    name={name}
                    location={location}
                    bio={bio}
                    html={html_url}
                    login={login}
                    company={company}
                    blog={blog} />
                </div>
                <div className="repos">
                <Repos repos={repos} />
                </div>
            </Fragment>

        )
    }
}

export default User;