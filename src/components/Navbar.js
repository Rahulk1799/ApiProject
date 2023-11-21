import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={"showdata"} className="nav-link active">
                <li className="nav-item">
                  <div className="nav-link" href="/">
                    Show Data
                  </div>
                </li>
              </Link>
              <Link to={"adddata"} className="nav-link active">
                <li className="nav-item">
                  <div className="nav-link" href="/">
                    Add Data
                  </div>
                </li>
              </Link>
              <Link to={"counter"} className="nav-link active">
                <li className="nav-item">
                  <div className="nav-link" href="/">
                    Counter
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
