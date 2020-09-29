import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    

    const scrollDown = () =>{
        window.scrollBy({
            top: 390,
            behavior: 'smooth',
          });
    }

  return (
    <div className='hero-container'>
      
      <h1>Hi, I´M GERSON MORALES</h1>
      <p  > A passionate Junior Software Engineer </p>
      <div className='hero-btns'>
        <Button
        onClick={scrollDown}
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;