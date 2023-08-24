import React from 'react';
import './index.css';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './components/reportWebVitals';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Home from './components/Home';
import PageError from './components/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home/',
        element: <Home />,
      },
      {
        path: 'calculator/',
        element: <Calculator />,
      },
      {
        path: 'quotes/',
        element: <Quote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
