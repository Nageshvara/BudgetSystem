import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
// import { Link } from "react-router-dom";
import './default.css';
import 'https://code.jquery.com/jquery-3.2.1.min.js';



function footer() {
    return(
        <footer className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mr-auto">
            <h5>About FCTS</h5>
            <p className="text-muted">
              Simplify CSBS fund management with FCTS. We provide powerful tools
              to streamline your budget tracking and financial control.
            </p>
            <ul className="list-inline social social-sm">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
          
          <div className="col-sm-2">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Log in</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-muted text-center small-xl">
            © 2023 FCTS - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    );
}

export default footer;