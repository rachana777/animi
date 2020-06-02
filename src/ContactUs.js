import React, { Component } from 'react';
import './App.scss';
import image16 from './assests/image16.jpg';

export default class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{
                name:'',
                email:'',
                address:'',
                message:''
            },
            addressOption:['inKTM','outKTM']
        }
    
    }

    myNameHandler=(e)=>{
        this.setState({
            user:
            {name:e.target.value}});
    }
    
    myEmailHandler=(e)=>{
        this.setState({
            user:
            {email:e.target.value}});
    }

    handleSubmit=(e)=>{
        alert('thank you for messsaging us'+ 'this.state.user.name');
        e.preventDefault();
        
    }
    

    render() {
        const addOptions=this.state.addressOption;
        return (
            <section className="section5">
    
            <div className="contactOuter">
            <div className="contactInner1">
            <div className="headS5">
            <h3>Drop us a Line</h3>
            </div>

            <form>
   
            <input type="text"  onChange={this.myNameHandler.bind(this)}
            value={this.state.user.name} placeholder="Your Name"/>
            
            <input type="email" onChange={this.myEmailHandler.bind(this)}
            value={this.state.user.email} placeholder="Your Email"/>
            
            <select>
            <option value="" disabled selected hidden>Choose an address</option>
            {addOptions.map(option=>(
                <option key={option} value={option} style={{height:'18px', fontSize:'18px'}}>{option}</option>
                ))}
            </select>
            
    
            
            <input type="textarea" value={this.state.user.message} placeholder="Your Message"  />
            
            </form>
            <input className="button" value="Submit" type="button" onClick={this.handleSubmit.bind(this)} />
            </div>
            <div className="contactInner2">
            <h3>Feel free to Contact Us</h3>
            <p>We will get to you asap</p>
            <div className="bounce">
            <div className="slidingImg">
            <img src={image16} alt="" />
            </div>
            </div>
            </div>


            </div>    
            </section>
        )
    }
}
