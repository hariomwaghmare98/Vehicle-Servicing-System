
import axios from 'axios';
import '../../style/viewAllCustomer.css';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Modal, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ViewAllServiceCenter() {
  const [selectedCenterId, setSelectedCenterId] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [centers, setCenters] = useState([]);
  const navigate = useNavigate();

  const openModelDialog = () => {
    setShowDialog(true);
  };

  const closeModelDialog = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    loadCenters();
  }, []);

  const loadCenters = async () => {
    try {
      const result = await axios.get("http://localhost:8081/all_serviceCenter");
      setCenters(result.data);
    } catch (error) {
      console.error("Error fetching service centers: ", error);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {centers.map(center => (
          <Col key={center.centre_id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className='CardTitle'>{center.centre_name}</Card.Title>
                <Card.Text>
                  <span >Center Id:</span> {center.centre_id} <br />
                  <span >Email:</span> {center.email} <br />
                  <span >Street:</span> {center.street} <br />
                  <span >City:</span> {center.city} <br />
                  <span >Contact Number:</span> {center.contact_number} <br />
                  <span >Payment Option:</span> {center.PaymentOption} <br />
                  <span >Opening Time:</span> {center.openingTime} <br />
                  <span >Closing Time:</span> {center.closingTime} <br />
                </Card.Text>
                <Button onClick={() => {
                  setSelectedCenterId(center.centre_id);
                  openModelDialog();
                }}>Book Appointment</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showDialog} onHide={closeModelDialog} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">Do you really want to book an appointment?</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={() => {
            navigate(`/ServiceAppointment`);
            closeModelDialog();
          }}>Yes</Button>
          <Button variant="danger" onClick={closeModelDialog}>No</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

