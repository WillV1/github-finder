import React from 'react';
// import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'


const RepoCard = (props) => {

    return (

        <ListGroup>
            <ListGroup.Item><a href={props.html} rel="noopener noreferrer" target="_blank">{props.name}</a></ListGroup.Item>
        </ListGroup>
    )
}

export default RepoCard;