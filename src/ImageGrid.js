import React, { Component } from 'react';
import './App.scss';
import image2 from './assests/image2.jpg';
import image3 from './assests/image3.jpg';
import image5 from './assests/image5.jpg';
import image6 from './assests/image6.jpg';
import image7 from './assests/image7.jpg';
import image8 from './assests/image8.jpg';
import image9 from './assests/image9.jpg';
import image10 from './assests/image10.jpg';
import image11 from './assests/image11.jpg';
import image12 from './assests/image12.jpg';
import image13 from './assests/image13.jpg';
import image14 from './assests/image14.jpg';
import image15 from './assests/image15.jpg';

class ImageGrid extends Component {
    constructor(props){
        super(props);
        this.state={
            gallery1:[
                image2,image3,
                
            ],
            gallery2:[ image8,image9,
                image10,
            ],
            
            gallery3:[image12,
                image13,image5,
        
            ],
        };
    }

    render() {
        return (
            <section className="section4">
            <h1>Gallery</h1>
                <div className="row">
                <div className="column">
                {this.state.gallery1.map(galleries=>(
                <img key={galleries} src={galleries} />) )}
                </div>
                <div className="column">
                {this.state.gallery2.map(galleries2=>(
                <img key={galleries2} src={galleries2} />) )}
                </div>
                <div className="column">
                {this.state.gallery3.map(galleries3=>(
                <img key={galleries3} src={galleries3} />) )}
                </div>

                </div>
                
            </section>
        )
    }
}
export default ImageGrid;