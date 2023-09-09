import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { Link } from "react-router-dom";
import './default.css';
import 'https://code.jquery.com/jquery-3.2.1.min.js';
import picture1 from './img/Picture1.jpg';

function imagenav() {
    const inlineStyle = {
        marginLeft: '20px', // Adjust the value as needed
        color: 'black',
      };
    return(
        <div className="row mt-6">
          <div className="col-md-6 mr-auto" id="optnbutton">
            <h2>FCTS: Simplify Your CSBS Fund Management</h2>
            <p className="mb-5">
              Effortlessly manage your CSBS budget with our powerful platform.
              Experience streamlined financial control and tracking.
            </p>
            <a href="#" className="btn btn-light">
            <Link to="/BudgetForm">Add Budget</Link>
            </a>
            <a href="#" className="btn btn-light" style={inlineStyle}>
            <Link to="/ExpenseForm">Add Expense</Link>
            </a>
          </div>
          <div className="col-md-5">
            <div className="slick-about">
              <img
                src={picture1}
                className="img-fluid rounded d-block mx-auto"
                alt="Work 1"
              />
            </div>
          </div>
        </div>
    );
}

export default imagenav;