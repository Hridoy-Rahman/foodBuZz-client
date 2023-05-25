import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Home/Layout/Main";
import Home from "../components/Home/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import Recipies from "../components/ChefRecipi/Recipies";
import NotFoundPage from "../components/NotFound/NotFoundPage";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"signup",
                element:<SignUp></SignUp>
            },
            {
                path:"allChef/:id",
                element:<PrivateRoute><Recipies></Recipies></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allChef/${params.id}`)
            }
        ]
    },
    {
        path:"*",
        element:<NotFoundPage></NotFoundPage>,
    }

]);

export default router;