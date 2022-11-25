import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Home from "../../Pages/Home/Home/Home";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
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
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
export default router;