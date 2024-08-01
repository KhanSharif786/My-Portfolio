import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { useState, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from '@emailjs/browser';

export default function Contactus() {
  const form = useRef();
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({ success: false, message: '' });

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .sendForm('service_9z9h3nn', 'template_ek0x6bg', form.current, 'FAd_0uswrNfxLX97B')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setButtonText('Send');
          setStatus({ success: true, message: 'Message sent successfully!' });
          alert('Message sent successfully!');
          setFormDetails({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonText('Send');
          setStatus({ success: false, message: 'Failed to send the message. Please try again later.' });
        }
      );
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                          value={formDetails.firstName}
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formDetails.email}
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formDetails.message}
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        />
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                        >
                          {buttonText}
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:001.ksharif@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        001.ksharif@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+91-8291443508`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91-8291443508</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/QKogL9bYBFq6cvWg9"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          705 A wing Alhudaibia tower mumbra 400612
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15097.665708535535!2d73.0296325!3d19.1577051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf8d3f8faf43%3A0x5e377a5aaac9072a!2sAl-huda%20Tower!5e0!3m2!1sen!2sbd!4v1695023265917!5m2!1sen!2sbd"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
