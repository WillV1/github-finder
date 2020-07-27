import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const ImageCard = (props) => {

    return (        
        <Card className="card" style={{ width: '10rem' }}>
        <Card.Img variant="top" src={props.image} alt="photo image"/>
        <Card.Body>
          <Card.Title>{props.login}</Card.Title>
          <Link to={`/user/${props.login}`} className="btn btn-dark">More</Link>
        </Card.Body>
      </Card>
    )
}

export default ImageCard;