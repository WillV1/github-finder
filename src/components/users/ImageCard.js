import React from 'react';
import Card from 'react-bootstrap/Card';

const ImageCard = (props) => {

    return (        
        <Card className="card" style={{ width: '60px' }}>
        <Card.Img variant="top" src={props.image} alt="photo image" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default ImageCard;