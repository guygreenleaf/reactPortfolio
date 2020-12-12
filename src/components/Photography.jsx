import React from 'react'
import Card from 'react-bootstrap/Card';
import bigTree from './imgs/bigTree.jpg';

export function Photography() {
    return (
        //CREATE "Photography" TEXT IMAGE PNG, OVERLAY IT ON CARD, TRANSITION IT ALL IN WITH FADE
        <div style={{marginBottom:'200px', marginTop:'200px', marginLeft:'45px'}}>
            <Card style={{position:'relative', width: '15rem', boxShadow: '5px 5px 5px black', border:'24px', borderStyle:'round'}}>
            <Card.Img variant="top" src={bigTree}  />
            </Card>
        </div>
    )
}

