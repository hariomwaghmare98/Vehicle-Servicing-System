import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/car-wash.jpg';
import img2 from '../Images/car-4.jpg';
import img3 from '../Images/img-4.jpg';

const CarouselPage = () => {
  return (
    <Carousel data-bs-theme="dark" className="d-block w-100">
    <Carousel.Item style={{ 
      position: "relative" , 
      width: '1400px',
       height: '550px',
        opacity:'2.0',
         }}>
   
      <img 
        className="d-block w-100"  
        src={img1}
        alt="First slide"
       
      />

      <Carousel.Caption
        style={{
       
       
          position: "absolute",
          top: "45%",
          left : "40%",
          fontFamily : "Source Sans 3, sans-serif",
          transform: "translate(-50%, -50%)",
          opacity: 5.0, // Set opacity for the text
          textShadow:"2px 2px 4px rgba(0, 0, 0, 0.8)",
          
        }}
      >
        <b>
            <h1 style={{ color: "white", fontSize: "3.4em", opacity: 9.0 }}>
              PROFESSIONAL AUTO REPAIR & MAINTAINANCE
            </h1>
        </b>
        <br></br>

        <strong> <h6 style={{
           color: "white", 
           fontSize: "1.2em", 
           opacity: 3.0,
           textShadow:"2px 2px 4px rgba(0, 0, 0, 0.8)",
           fontWeight:700,
            }}>
         We Are Dedicated To Providing High-Quality Auto Repair & Maintainance To 
         Keep You & Your Vehicle Safe On The Road.</h6></strong>
        <h6 style={{ 
          color: "#eb8f34",
           fontSize: "1.2em", 
           opacity: 9.0,
           textShadow:"2px 2px 4px rgba(0, 0, 0, 0.8)",
           fontWeight:700 }}>We Give Your Vehicle The Care It Deserves.</h6>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={{
       position: "relative" , 
        width: '1400px', 
        height: '550px', 
        opacity:0.9 
        }}>
      <img 
        className="d-block w-100"
        src={img2}
        alt="First slide"
        
      />

      <Carousel.Caption
        style={{
          
          textAlign: "center",
          color: "black",
          position: "absolute",
          top: "45%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          opacity: 9.0, // Set opacity for the text
          textShadow:"2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >

            <b>
            <h1 style={{ color: "#cefc03", fontSize: "3.4em", opacity: 9.0 }}>
              EXCELLENT SERVICE AT RESONABLE RATES
            </h1>
        </b>
            
        <br></br>

        <strong> <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
          
        </h6></strong>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={{ position: "relative" ,  width: '1400px', height: '550px',opacity: 1.0  }}>
      <img 
        className="d-block w-100"
        src={img3}
        alt="First slide"
    
      />

      <Carousel.Caption
        style={{
          
          textAlign: "center",
          color: "black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 1.0, // Set opacity for the text
        }}
      >
        <strong>
          <i>
            <h1 style={{ color: "black", fontSize: "2.5em", opacity: 1.0 }}>
              
            </h1>
          </i>
          </strong>
        <br></br>
        <strong>  <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
          
        </h6></strong>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

export default CarouselPage;