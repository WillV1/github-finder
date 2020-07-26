import React from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

const ImageCard = (props) => {

    return (        
        <Card className="card" style={{ width: '10rem' }}>
        <Card.Img variant="top" src={props.image} alt="photo image" roundedCircle/>
        <Card.Body>
          <Card.Title>{props.login}</Card.Title>
          <Button href={props.html} variant="dark">More</Button>
        </Card.Body>
      </Card>
    )
}

export default ImageCard;