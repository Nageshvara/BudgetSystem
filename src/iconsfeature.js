import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
// import { Link } from "react-router-dom";
import './default.css';
import 'https://code.jquery.com/jquery-3.2.1.min.js';
import { Edit3,  Monitor , Layout, Globe } from 'react-feather';

function iconsfeature() {
    return(
        <div className="row mt-5">
          <div className="col-md-10 mx-auto">
            <div className="row feature-boxes">
              <div className="col-md-6 box">
                <div className="icon-box box-primary">
                  <div className="icon-box-inner">
                  <Edit3 width={35} height={35} />
                  </div>
                </div>
                <h5>Effortless CSBS Fund Management</h5>
                <p className="text-muted">
                  Simplify your CSBS budget tracking and financial control with
                  our intuitive platform.
                </p>
              </div>
              <div className="col-md-6 box">
                <div className="icon-box box-success">
                <div className="icon-box-inner">
                <Monitor width={35} height={35} />
              </div>
                </div>
                <h5>User-Friendly Interface</h5>
                <p className="text-muted">
                  Our platform is designed for seamless CSBS fund management,
                  ensuring ease of use for all.
                </p>
              </div>
              <div className="col-md-6 box">
                <div className="icon-box box-danger">
                  <div className="icon-box-inner">
                  <Layout width={35} height={35} />
                  </div>
                </div>
                <h5>Advanced Reporting</h5>
                <p className="text-muted">
                  Gain valuable insights into your CSBS finances with
                  comprehensive and customizable reports.
                </p>
              </div>
              <div className="col-md-6 box">
                <div className="icon-box box-info">
                  <div className="icon-box-inner">
                  <Globe width={35} height={35} />
                  </div>
                </div>
                <h5>Access Anywhere, Anytime</h5>
                <p className="text-muted">
                  Manage your CSBS funds effortlessly from anywhere in the world
                  with global accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default iconsfeature;