import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Lomo </span>
            from <span className="green"> Spain.</span>
            <br />I am physicist and a tech enthusiast
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Landscape astrophotography
            </li>
            <li className="about-activity">
              <ImPointRight /> Lifting iron
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We are stuck with technology when what we really want is just stuff that works"{" "}
          </p>
          <footer className="blockquote-footer">Douglas Adams</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
