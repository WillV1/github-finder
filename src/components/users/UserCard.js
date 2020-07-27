import React, {Fragment} from 'react';
// import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './UserCard.css'

const ImageCard = (props) => {

    return (        
        <Card className="card" style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.image} alt="photo image"/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          Location: {props.location}
          <div className="bio">
          {props.bio && (
          <Fragment>
              <Card.Title>Bio</Card.Title>
              {props.bio}
              </Fragment>)}
            </div>
            <Button className="link-button" href={props.html} target="_blank" variant="dark" type="submit" block>Visit Github Profile</Button>
            <ul>
                <li>
                   {props.login && <Fragment>
                        <strong>Username:</strong>{props.login}
                   </Fragment>} 
                </li>
                <li>
                   {props.company && <Fragment>
                        <strong>Company:</strong>{props.company}
                   </Fragment>} 
                </li>
                <li>
                   {props.blog && <Fragment>
                        <strong>Website:</strong>{props.blog}
                   </Fragment>} 
                </li>
            </ul>
        </Card.Body>
      </Card>
    )
}

export default ImageCard;

