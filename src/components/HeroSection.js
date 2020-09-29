import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    

    const scrollDown = () =>{
        window.scrollBy({
            top: 420,
            behavior: 'smooth',
          });
    }

  return (
    <div className='hero-container'>
      
      <p>Hi, I´M GERSON MORALES</p>
      <p2  > A passionate Junior Software Engineer </p2>
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