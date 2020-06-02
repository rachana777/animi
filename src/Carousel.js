import React, { useState, Component } from 'react';
import image4 from './assests/image4.jpg';
import image2 from './assests/image2.jpg';
import image5 from './assests/image5.jpg';
import './App.scss';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



class Carousel extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
        images: [
            image2,
        image2,
        image2,
            image2,
            image2,
            image2,
        ],
        };
    }

    render(){
        let image=this.state.images;

        return(
        <section className="section3">
        <h1>About Us</h1>
        
            <CardGroup className="cardGroup">
    
            {image.map(img=>(
                <Card style={{width:'235px'}} className="Card">
                <Card.Img variant="top" src={img} className="cardImg"/>
                <Card.Body>
                <Card.Title className="cardTxt"><h2>CEO</h2></Card.Title>
                <Card.Text className="cardTxt">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. The content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            ))}

            </CardGroup>
            
    
            </section>
        
    
    );

    }
}

export default Carousel;