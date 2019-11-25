import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './projectCard.css';

function CardComponent(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.props.picture} />
            <Card.Body>
                <Card.Title>{props.props.title}</Card.Title>
                <Card.Text>
                {props.props.description}
                </Card.Text>
                <Button className="button" href={props.props.link}>Check it out!</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;