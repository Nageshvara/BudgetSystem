import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
// import { Link } from "react-router-dom";
import './default.css';
import 'https://code.jquery.com/jquery-3.2.1.min.js';

function navigation() {
    return(
    <section className="smart-scroll">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand heading-black">
          FundsTrackCSBS
        </a>
        <button
          className="navbar-toggler navbar-toggler-right border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span data-feather="grid" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#blog">
                About Department
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link page-scroll d-flex flex-row align-items-center text-primary"
                href="#"
              >
                About Institution
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  );
}

export default navigation;