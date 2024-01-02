import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/custom.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Artise from './pages/Artise';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "artise/:artiseId",
        element: <Artise/>,
      },
    ],
  },

  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */} <RouterProvider router={router} />
  </React.StrictMode>
);
