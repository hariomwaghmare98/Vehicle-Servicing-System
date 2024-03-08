
import React from 'react'
import CarouselPage from './CarouseelPage';
import { Container, Row, Col } from "reactstrap";
import ChooseUs from './ChooseUs';
import Client from './Client';


const Home = () => {
  return (
     /* ============= hero section =========== */
     <div>
     <CarouselPage/>
     <ChooseUs />
     <Client/>
     <div className="our_services">
       <Container>
         <Row className="form__row">
           <Col lg="4" md="4">
             <div className="find__cars-left">
             </div>
           </Col>

           <Col lg="8" md="8" sm="12">
           {/* <FindCarForm />*/}
           </Col>
         </Row>
       </Container>
     </div>
    </div>
  );
}

export default Home;