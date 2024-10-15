import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';
import Home from '../Pages/Home/Home';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        }
      ]
    },
  ]);

export default Router;