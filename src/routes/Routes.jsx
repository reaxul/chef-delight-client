import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home";
import ErrorPage from "../layouts/ErrorPage";
import ChefRecipe from "../Pages/chefRecipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:3000/chef')
            },
            {
                path: '/chef-recipe/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader:({params})=>fetch(`http://localhost:3000/chef-recipe/${params.id}`)
            }
        ]
    }
])
export default router;