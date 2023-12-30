import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// páginas

import Home from './pages/Home';
import Busca from './pages/Busca';
import Apresentação from './pages/Apresentação';

const router = createBrowserRouter([{
  element: <App/>,
  children: [{
    path: "/",
    element: <Home/>
  },
  {
    path: "/busca",
    element: <Busca/>
  },
  {
    path: "/apresentação",
    element: <Apresentação/>
  },
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router
    }/>
  </React.StrictMode>
);
