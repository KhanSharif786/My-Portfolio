import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Khan Mohammad Sharif </b> 
                  , a <b className="purple">Computer Engineering </b> 
                  graduate with a passion for <b className="purple">Software Development, 
                    Artificial Intelligence, Machine Learning, and Data Science. </b>
                      
                <br />
                <br />

                As a software engineer, I specialize in <b className="purple">crafting innovative 
                solutions</b> that elevate user experiences and address real-world challenges. 
                With a solid foundation in software development and a deep passion for technology, 
                I am dedicated to <b className="purple">building applications</b> that not only 
                meet <b className="purple">user needs </b> but also make a 
                <b className="purple">positive impact on society.</b>

                <br />

                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building new web technologies and products. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
