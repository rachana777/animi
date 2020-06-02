import React ,{Component,useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import image2 from './assests/image2.jpg';
import image3 from './assests/image3.jpg';
import {Expo,TimelineMax} from 'gsap';




class MainBody extends Component {
    constructor(props){
        super(props)
        this.backgrndelement=React.createRef();
        this.textelement=React.createRef();
        this.deselement=React.createRef();

    }
    componentDidMount(){
        const  t1= new TimelineMax();
        t1.
        fromTo(this.backgrndelement.current,2,{opacity:0,y:1000,ease:Expo.easeIn},{opacity:1,y:0,ease:Expo.easeOut})
        .staggerFromTo(
            this.textelement.current,
            2,{y:"-100%",ease:Expo.easeIn},{
                y:"-50%",ease:Expo.easeOut
            },0.15
        );
        t1.fromTo(this.deselement.current,0.5,{y:"50",opacity:0},{y:"0",opacity:1});
        
        }
            


    render() {
        return (
        <div id="fullpage">
        <div id="backsection" ref={this.backgrndelement}>
        <section className="section1">
        <h1 ref={this.textelement}>Home Decoration</h1>
        </section>
        </div>

        <section className="section2">
        <h1>Different Styles</h1>
        <div className="description">
        <div className="paragraph"  ref={this.deselement}>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sunt in culpa qui officia deserunt mollit anim id est laborum."

        </p>
        </div>
        <div className="images">
        <img src={image2} alt="image" className="chair"/>
        <img src={image3} alt="image" className="chair"/>
        </div>
        </div>
        </section>
        

        </div>
        


        );
    }
}
export default MainBody;