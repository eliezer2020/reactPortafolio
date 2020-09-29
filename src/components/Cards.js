import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h2>Check out what i have done!</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="assets/flutter-gif.gif"
              text="mobile apps that consumes REST API, MAPS, QR code, Firebase Google Cloud services..."
              label="Flutter"
            />
            <CardItem
              src="assets/img1.gif"
              text="Scripts to automated Jira´s ticket creating (snippet in Chrome), hack insecure exam that shows the entire JS app on the client. And of course this! my first React app"
              label="JS"
            />
          </ul>
          <ul>
          <CardItem
              src="assets/java.png"
              text="Academic experience with c++ for Data Structures and Object oriented Programming with Java"
              label="Java/C++"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
