
import axios from 'axios';
import '../../style/viewAllCustomer.css'
import React, { useEffect, useState } from 'react'
import {  Container,  Table } from 'react-bootstrap';


export default function ViewAllCustomer() {

  //const [selectNumber, setSelectedNumber] = useState("");   // Hold the value of the ID to be deleted
 // const [showDialog, setShowDialog] = useState(false);
  const [customers, setCustomers] = useState([]);
 // const navigate = useNavigate();

  // const openModelDialog = () => {
  //   setShowDialog(true);
  // }

  // const closeModelDialog = () => {
  //   setShowDialog(false);
  // }

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    try {
      const result = await axios.get("http://localhost:8081/all_customer");
      setCustomers(result.data);
    } catch (error) {
      console.error("Error loading customers: ", error);
    }
  }

  // const handleDelete = async () => {
  //   try {
  //     const result = await axios.delete(`http://localhost:8081/customer/delete/${selectNumber}`);
  //     loadCustomer();
  //    // closeModelDialog();
  //   } catch (error) {
  //     console.error("Error deleting customer: ", error);
  //   }
  // }

  return (
    <Container className="mt-5 mb-5">
      <Table bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
            {/* <th>Password</th> */}
            {/* <th>Edit</th>
            <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.gender}</td>
              <td>{customer.city}</td>
              <td>{customer.state}</td>
              {/* <td>{customer.password}</td> */}
              {/* <td>
                <Button variant="primary" onClick={() => navigate(`/edit/${customer.id}`)}>Edit</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => {
                  openModelDialog();
                  setSelectedNumber(customer.id);
                }}>Delete</Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>

  
      {/* <Modal show={showDialog} onHide={closeModelDialog} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">Do you really want to delete?</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={() => {
            navigate(`/ViewAllCustomer`);
            closeModelDialog();
          }}>Yes</Button>
          <Button variant="danger" onClick={closeModelDialog}>No</Button>
        </Modal.Footer>
      </Modal> */}

    </Container>
  )
}
