import React from "react";
import "../style/client.css";

const Clients = () => {
  return (
    <div className="client">
      <section className="client-logo-area client-logo-one">
        <div className="section-title-two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h2 className="head fw-bold">Our Awesome Clients</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/uideck.svg"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/ayroui.svg"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/lineicons.svg"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
