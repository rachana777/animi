import React,{useState} from 'react';
import './App.scss';
import MenuNav from './menunav.js';
import MainBody from './MainBody.js';
import Carousel from './Carousel.js';
import ImageGrid from './ImageGrid.js';
import ContactUs from './ContactUs.js';


function App (){
  return (
    <div className="container">
    <MenuNav/>
    <MainBody/>
    <Carousel/>
    <ImageGrid/>
    <ContactUs/>
    
    </div>
  );
}

export default App;
