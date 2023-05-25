import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Home/Layout/Main";
import Home from "../components/Home/Home/Home";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            // {
            //     path:"login",
            //     element:<Login></Login>
            // },
            {
                path:"signup",
                element:<SignUp></SignUp>
            }
        ]
    }

]);

export default router;