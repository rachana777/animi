import React ,{Component} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';
import {Expo,TimelineMax} from 'gsap';

class MenuNav extends Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false,
        }}
    
        handleClick=()=>{

        this.setState({
            isOpen: !this.state.isOpen,
        })}


    render(){
        return(
        <nav className="navbar">
            <a href="#" className="logo">logo</a>
            <span className="navbar-toggle" id="js-toggle">
            <i className="fa fa-bars" onClick={this.handleClick}></i>
            </span>
            <ul class={this.state.isOpen?'showNav':'undefined'} >
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#" >Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                    
        </nav>

        );
    }
}

export default MenuNav;