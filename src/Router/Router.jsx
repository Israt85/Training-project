import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/about',
          element:<About></About>

        }
      ]
    },
  ]);

export default Router;