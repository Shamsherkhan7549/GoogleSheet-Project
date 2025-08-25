import React from "react";
import Progressbar from "../progressbar/Progressbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {

  return (
    <div className="my-4">
    <div className="card shadow-lg border-0 rounded-3 p-3 " style={{ width: "22rem" }}>
      {/* Header with avatar + info */}
      <div className="d-flex align-items-center mb-3 ">
        <img
          src="https://via.placeholder.com/60"
          alt="profile"
          className="rounded-circle me-3"
        />
        <div>
          <h5 className="mb-0">Soham Kumar</h5>
          <small className="text-muted">soham@gmail.com</small>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row text-center mb-3">
        <div className="col">
          <h5 className="fw-bold">21</h5>
          <p className="text-muted mb-0">Total</p>
        </div>
        <div className="col">
          <h5 className="fw-bold text-success">20</h5>
          <p className="text-muted mb-0">Completed</p>
        </div>
        <div className="col">
          <h5 className="fw-bold text-warning">1</h5>
          <p className="text-muted mb-0">Pending</p>
        </div>
        <div className="col">
          <h5 className="fw-bold text-danger">0</h5>
          <p className="text-muted mb-0">Late</p>
        </div>
      </div>

      {/* Progress Section */}
      <div>
        <p className="fw-semibold mb-1">Completion Rate</p>
        <Progressbar progress={55} />
      </div>
      <div>
        <p className="fw-semibold mb-1">Pending Rate</p>
        <Progressbar progress={25} />
      </div>
      <div>
        <p className="fw-semibold mb-1">Last Completion Rate</p>
        <Progressbar progress={75} />
      </div>
    </div>
    </div>
  );
};

export default Card;
