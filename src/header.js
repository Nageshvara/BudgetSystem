import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
// import { Link } from "react-router-dom";
import './default.css';
import 'https://code.jquery.com/jquery-3.2.1.min.js';

function header() {
    return(
    
    <section className="py-7 py-md-0 bg-hero" id="home">
    <div className="container">
      <div className="row vh-md-100">
        <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
          <h1 className="heading-black text-capitalize">
            CSBS funds simplified
          </h1>
          <p className="lead py-3">
            FTCS is your go-to platform for simplifying CSBS fund management.
            Get started for free today.
          </p>
          <button
            className="btn btn-primary d-inline-flex flex-row align-items-center"
            id="startbutton"
          >
            Get started now
            <em className="ml-2" data-feather="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </section>);
}

export default header;