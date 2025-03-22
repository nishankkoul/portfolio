import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with DevOps and Cloud, and I've definitely learned something along the way… I think? 🤔🚀
              <br />
              <br />
              I speak fluently in the language of 
              <i>
                <b className="purple"> automation, scalability, and reliability</b>
              </i>
              —whether it's orchestrating containers with 
              <i>
                <b className="purple"> Kubernetes</b>
              </i>
              , managing pipelines in 
              <i>
                <b className="purple"> Jenkins</b>
              </i>
              , or deploying infrastructure on 
              <i>
                <b className="purple"> AWS and GCP</b>
              </i>
              .
              <br />
              <br />
              My interests? Building highly scalable &nbsp;
              <i>
                <b className="purple">cloud-native solutions</b>, 
                automating everything (because why do it twice?), 
                and diving into the world of{" "}
                <b className="purple">
                  SRE and Infrastructure as Code
                </b>
              </i>
              .
              <br />
              <br />
              Let's keep the servers running, the logs clean, and the latency low! 
              <i>
                <b className="purple"> 🛠️☁️🔥</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nishankkoul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Nishank_Koul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nishank-koul/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
