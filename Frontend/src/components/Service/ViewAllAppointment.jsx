
import axios from 'axios';
import '../../style/viewAllAppointment.css';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ViewAllAppointment() {
    const [appointments, setAppointments] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();

    const openModelDialog = () => {
        setShowDialog(true);
    };

    const closeModelDialog = () => {
        setShowDialog(false);
    };

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {
        try {
            const result = await axios.get("http://localhost:8081/all_appointment");
            setAppointments(result.data);
        } catch (error) {
            console.error("Error fetching appointments: ", error);
        }
    };

    const handleDelete = async () => {
        try {
            const result = await axios.delete(`http://localhost:8081/appointment/delete/${selectedNumber}`);
            loadAppointments();
            closeModelDialog();
        } catch (error) {
            console.error("Error deleting appointment: ", error);
        }
    };

    const handleClick =async (id) => {
        console.log(id);

        const result = await axios.get(`http://localhost:8081/user/send-email/${id}`);
        alert("Email Send");
      
    };

    return (
        <Container className="mt-5 mb-5">
            <Row xs={1} md={2} lg={4} className="g-4">
                {appointments.map(appointment => (
                    <Col key={appointment.appointment_id}>
                        <Card className="h-100 appointment-card">
                            <Card.Body>
                                <Card.Title className="card-title cardtitle">{appointment.name}</Card.Title>
                                <Card.Text>
                                    <div className='textstyle'>
                                        <strong>Email:</strong> {appointment.email}
                                    </div>
                                    <div className='textstyle'>
                                        <strong>Vehicle Name:</strong> {appointment.vehicleName}
                                    </div>
                                    <div className='textstyle'>
                                        <strong>Date:</strong> {appointment.date}
                                    </div>
                                    <div className='textstyle'>
                                        <strong>Time:</strong> {appointment.time}
                                    </div>
                                    <div className='textstyle'>
                                        <strong>Payment Mode:</strong> {appointment.payment_mode}
                                    </div>
                                    <div className='textstyle'>
                                        <strong>Service Description:</strong> {appointment.serviceDescription}
                                    </div>
                                </Card.Text>
                                <div className="d-flex justify-content-between mt-3">
                                    <Button variant="info" className="custom-btn" size="sm" onClick={()=>{handleClick(appointment.appointment_id)}}>Approve</Button>
                                    <div style={{ width: '10px' }}></div>
                                    <Button variant="warning" className="custom-btn" size="sm" onClick={() => {
                                        setSelectedNumber(appointment.appointment_id);
                                        openModelDialog();
                                    }}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showDialog} onHide={closeModelDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete?</Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="primary" onClick={handleDelete}>Yes</Button>
                    <Button variant="danger" onClick={closeModelDialog}>No</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

