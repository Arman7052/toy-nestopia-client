

import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../LayOut/LoginReg/Login";
import Register from "../LayOut/LoginReg/Register";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Error></Error> ,
      children: [
        {
            path: '/',
            element:  (
              <>
                <Helmet>
                  <title>Toy Nestopia | Home</title>
                </Helmet>
                <Home></Home>
              </>
            )
        },
        {
          path: '/login',
          element: (
            <>
              <Helmet>
                <title>Toy Nestopia|Login</title>
              </Helmet>
              <Login></Login>
            </>
          )
        },
        {
          path: '/register',
          element:(
            <>
              <Helmet>
                <title>Toy Nestopia|Register</title>
              </Helmet>
              <Register></Register> 
            </>
          )
        },
        {
          path:'/allToys',
          element: (
            <>
              <Helmet>
                <title>Toy Nestopia|AllToys</title>
              </Helmet>
              <AllToys></AllToys>
            </>
          )
        },
        {
          path:'/mytoys',
          element: (
            <>
              <Helmet>
                <title>Toy Nestopia|MyToys</title>
              </Helmet>
              <PrivateRoute><MyToys></MyToys></PrivateRoute>
            </>
          ) 
        },
        {
          path:'/addtoy',
          element: (
            <>
              <Helmet>
                <title>Toy Nestopia|AddToy</title>
              </Helmet>
              <PrivateRoute><AddToy></AddToy></PrivateRoute>
            </>
          ) 
        },
        {
          path:'/toy',
          element: (
            <>
              <Helmet>
                <title>Toy Nestopia|ToyDetails</title>
              </Helmet>
              <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            </>
          ) 
        }
      ]
    },
   
   
    {
        path:'/blog',
        element: (
          <>
            <Helmet>
              <title>Toy Nestopia|Blog</title>
            </Helmet>
            <Blog></Blog>
          </>
        ) 
    },
    {
        path:'/about',
        element: (
          <>
            <Helmet>
              <title>Toy Nestopia|AboutUs</title>
            </Helmet>
            <AboutUs></AboutUs>
          </>
        ) 
    },
    {},
    {},
  ]);

export default router;