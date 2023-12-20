import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Phone from "../Pages/Phone/Phone";

const myCreatedRoute = createBrowserRouter([
    {
       path : '/',
       element : <MainLayout></MainLayout>,
       errorElement : <ErrorPage></ErrorPage>,
       children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=> fetch(`/phones.json`)
        },
        {
            path : '/favorites',
            element : <Favorites></Favorites>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/phones/:id',
            element : <Phone></Phone>,
            loader : ()=> fetch(`/phones.json`)

        }
       ]
    }
])

export default myCreatedRoute;