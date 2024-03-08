import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../style/footer.css";

// const quickLinks = [
//   {
//     path: "/Aboutus",
//     display: "About Us",
//   },

//   {
//     path: "#",
//     display: "Privacy Policy",
//   },

//   {
//     path: "/cars",
//     display: "Service centre Listing",
//   },
//   {
//     path: "/blogs",
//     display: "Blog",
//   },

//   {
//     path: "/Contactus",
//     display: "Contact Us",
//   },
// ];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    
    <footer className="page-footer font-small blue pt-4 footercolor">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h4 className="text-uppercase">Care Zone</h4>
                <p>Best Car Service | Car Repair | Car Wash 
                Car Denting Painting | Car Ac Service In India</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Pages </h5>
                <ul className="list-unstyled">

                    <Link to="/" className="dropdown-item">Home</Link>
                    <Link to="/ChooseUs" className="dropdown-item">Services</Link>
                    <Link to="/Aboutus" className="dropdown-item">About us</Link>
                    <Link to="/Contactus" className="dropdown-item">Contact us</Link>

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">External link</h5>
                <ul className="list-unstyled">
                  <Link to="/" className="dropdown-item">Blog</Link>
                  <Link to="/" className="dropdown-item">News Letters</Link>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© {year} Copyright:Care Zone
    </div>

</footer>
  );
};

export default Footer;