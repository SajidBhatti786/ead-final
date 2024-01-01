import React from "react";

const Services = () => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-4 mt-4">
        <div className="col mb-4">
          <div className="card h-100 d-flex align-items-center">
            <i
              className="bi bi-truck"
              style={{ fontSize: "2rem", color: "red" }}
            ></i>
            <div className="card-body">
              <h5
                className="text-uppercase"
                style={{ fontFamily: "Baloo", color: "#1D1D1D" }}
              >
                Free Shipping
              </h5>
              <p style={{ fontFamily: "Lato", color: "#555555" }}>
                Enjoy free shipping on all orders above $100.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100 d-flex align-items-center">
            <i
              className="bi bi-arrow-counterclockwise"
              style={{ fontSize: "2rem", color: "#1D1D1D" }}
            ></i>
            <div className="card-body">
              <h5
                className="text-uppercase"
                style={{ fontFamily: "Baloo", color: "#1D1D1D" }}
              >
                Support 24/7
              </h5>
              <p style={{ fontFamily: "Lato", color: "#555555" }}>
                Our support team is there to help you for queries.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100 d-flex align-items-center">
            <i
              className="bi bi-arrow-counterclockwise"
              style={{ fontSize: "2rem", color: "#1D1D1D" }}
            ></i>
            <div className="card-body">
              <h5
                className="text-uppercase"
                style={{ fontFamily: "Baloo", color: "#1D1D1D" }}
              >
                30 Days Return
              </h5>
              <p style={{ fontFamily: "Lato", color: "#555555" }}>
                Simply return it within 30 days for an exchange.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100 d-flex align-items-center">
            <i
              className="bi bi-fingerprint"
              style={{ fontSize: "2rem", color: "#1D1D1D" }}
            ></i>
            <div className="card-body">
              <h5
                className="text-uppercase"
                style={{ fontFamily: "Baloo", color: "#1D1D1D" }}
              >
                100% Payment Secure
              </h5>
              <p style={{ fontFamily: "Lato", color: "#555555" }}>
                Our payments are secured with 256-bit encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
