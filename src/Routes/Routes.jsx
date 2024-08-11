import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../../src/Login/Login"
import Home from "../components/Home";

import Signup from "../../src/SignUp/Signup";
import Cart from "../components/Cart";
// import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
      
        children:[
            {
                path:'/',
                element:<Home></Home>,
               
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
                // loader: () => fetch('http://localhost:5000/cart')


            },
            
        ]
    },




 
]);

export default router;