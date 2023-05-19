import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../LayOut/LoginReg/Login";
import Register from "../LayOut/LoginReg/Register";

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