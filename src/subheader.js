import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
// import { Link } from "react-router-dom";
import './default.css';
import 'https://code.jquery.com/jquery-3.2.1.min.js';


function subheader() {
    return(
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h2 className="heading-black">FTCS offers everything you need.</h2>
            <p className="text-muted lead">
              FTCS streamlines CSBS fund management, offering efficient tools for
              budget tracking and financial control.
            </p>
          </div>
        </div>
    );
}

export default subheader;