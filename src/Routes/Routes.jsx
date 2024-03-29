import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Home/Layout/Main";
import Home from "../components/Home/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import Recipies from "../components/ChefRecipi/Recipies";
import NotFoundPage from "../components/NotFound/NotFoundPage";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog/Blog";

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
                loader: ({ params }) => fetch(`https://food-bu-zz-server.vercel.app/allChef/${params.id}`)
            },
            {
                path:"blog",
                element: <Blog></Blog>
            }
        ]
    },
    {
        path:"*",
        element:<NotFoundPage></NotFoundPage>,
    }

]);

export default router;