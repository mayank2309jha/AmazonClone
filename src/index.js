import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Checkout from "./Components/Checkout.jsx";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
      path: "/checkout",
      element: <Checkout/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className = "index">
    <RouterProvider router = {router}/>
    </div>
);
