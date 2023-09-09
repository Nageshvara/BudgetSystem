import React from 'react';
import ReactDOM from 'react-dom/client';
import { Edit3 } from 'react-feather';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "BudgetForm",
    element: <BudgetForm/>,
  },
  {
    path: "ExpenseForm",
    element: <ExpenseForm/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
