import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishank Koul </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently employed as a DevOps Engineer at Stringify AI.
            <br />
            I have completed Bachelor of Technology (Computer Science) at <span className="purple">PES University, Bengaluru, India</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Automate. Scale. Deploy. Monitor. Optimize. Repeat."{" "}
          </p>
          <footer className="blockquote-footer">Nishank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
