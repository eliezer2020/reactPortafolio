import React from "react";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-text">
          "I am a Flutter Developer willing to learn new technologies. I have
          strong fundamentals in computer science, also i use best practice in
          modern Software Engineering. I am a proactive person and a fast
          learner. "
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <a
            className="footer-links-items"
            target="_blank"
            href="https://www.linkedin.com/in/gerson-eliezer-morales-hernandez-a1b771153/"
          >
             <Button
        
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Linkeding
        </Button>
        
           
           
          </a>
          <p className="footer-subscription-text">contacto.gerson.mexico@gmail.com</p>

         
        </div>
      </div>
    </div>
  );
}

export default Footer;
