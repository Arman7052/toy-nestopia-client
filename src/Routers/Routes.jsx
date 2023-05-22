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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Error></Error> ,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/allToys',
          element: <AllToys></AllToys>
        },
        {
          path:'/mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/addtoy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'/toy/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
        }
      ]
    },
   
   
    {
        path:'/blog',
        element: <Blog></Blog>
    },
    {
        path:'/about',
        element: <AboutUs></AboutUs>
    },
    {},
    {},
  ]);

export default router;