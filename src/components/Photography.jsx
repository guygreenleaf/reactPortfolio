import React from 'react'
import Card from 'react-bootstrap/Card';
import bigTree from './imgs/bigTree.jpg';

export function Photography() {
    return (
        <div>
            <Card style={{width: '18rem', marginTop: '200px', marginBottom:'90px', marginLeft:'200px' }}>
            <Card.Img variant="top" src={bigTree} style={{border: '20'}} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

