import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../style/chooseus.css";
import { Row, Col , Container, Button } from 'react-bootstrap';
import i1 from '../Images/img-1.jpg';
import i2 from '../Images/img-2.jpg';
import i3 from '../Images/mechanic-2.jpeg';
import serv1 from '../Images/oil-2.jpg';
import serv2 from '../Images/engine-3.jpg';
import serv3 from '../Images/break-4.jpg';
const ChooseUs = () => {
    return (
      <div>
      <section className='section'>
      <div className = "choose_us_text">
      <h1>Why Choose Us</h1>
      <p className='ptag'>We Offer Full Service Auto Repair & Maintenance</p>
      </div>
      </section>
  
      <section className="features-section mt-0 custom-section-margin">
        <Container>
          <Row>
            <Col md={4}>
              <div className="offer-item">
              <img
                  src={i1} // Add the path to your first hero image
                  alt="service-1"
                  className="img-fluid"
                />
                <h4>Genuine OEM Products</h4>
                <p>Reliable & Genuine Parts At Valuable Prices</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="offer-item">
              <img
                  src={i2} // Add the path to your first hero image
                  alt="service-1"
                  className="img-fluid"
                />
                
                <h4>State Of The Art Workshop</h4>
                <p>Highly Trained Service Specialist</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="offer-item">
              <img
                  src={i3} // Add the path to your first hero image
                  alt="service-1"
                  className="img-fluid "
                />
                
                <h4>Door Step Express Service</h4>
                <p>Fixed Location Pickup And Drop</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='service-section'>
      <div className = "our-services-text">
      <h1>OUR SERVICES</h1>
      </div>

      <section className="service-section ">
      <Container>
        <Row>
          <Col md={4}>
            <div className="service-item">
              <div className="image-overlay-container">
                <img
                  src={serv1}
                  alt="service-1"
                  className="img-fluid img-change"
                />
                <div className="overlay-text" >OIL CHANGE</div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-item">
              <div className="image-overlay-container">
                <img
                  src={serv2}
                  alt="service-2"
                  className="img-fluid img-change"
                />
                <div className="overlay-text">ENGINE REPAIR</div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-item">
              <div className="image-overlay-container">
                <img
                  src={serv3}
                  alt="service-3"
                  className="img-fluid img-change"
                />
                <div className="overlay-text">
                 BREAKS REPAIR
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

      <div className="d-flex justify-content-center align-items-center mb-1">
        <Button variant="warning" size="lg" style={{fontWeight:'bolder',width:'20%'}} >
          VIEW  ALL  SERVICES
        </Button>{' '}
       </div>
  </section> 
  </div>
  
    )
  }

export default ChooseUs;