import React from 'react';
import Proptypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';

const Navigation = (props) => {


    return (
        <Navbar className="navbar" bg="danger" expand="lg">
            <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
            <Navbar.Brand ><p>{props.title}</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/"><p>Home</p></Link>
                    <Link className="nav-link" to="/about"><p>About</p></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

Navigation.defaultProps = {
    title: 'Github Finder',
    icon: { faGithub }
};

Navigation.propTypes = {
    title: Proptypes.string.isRequired,
    icon: Proptypes.object.isRequired
}

export default Navigation;