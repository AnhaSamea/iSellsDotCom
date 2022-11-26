import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Categories from "../../Pages/Home/Category/Categories";
import CategoryId from "../../Pages/Home/Category/PhoneModels/CategoryId";
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
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/categories/:id',
                element: <CategoryId></CategoryId>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/categories/${params.id}`)
            },

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
export default router;