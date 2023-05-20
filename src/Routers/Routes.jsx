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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <MyToys></MyToys>
        },
        {
          path:'/addtoy',
          element: <AddToy></AddToy>
        },
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