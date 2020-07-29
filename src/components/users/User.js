import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserCard from './UserCard';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

import { Link } from 'react-router-dom';
import './User.css'


import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = ( {match }) => {
    const githubContext = useContext(GithubContext);
    
    const {getUser, loading, user, repos, getUserRepos} = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

        const { name, avatar_url, location, bio, blog, login, html_url, company, hireable } = user;

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

export default User;