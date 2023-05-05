import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home";
import ErrorPage from "../layouts/ErrorPage";
import ChefRecipe from "../Pages/chefRecipe";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chef-s-delight-server-reaxul.vercel.app/chef"),
      },
      {
        path: "/chef-recipe/:id",
        element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://chef-s-delight-server-reaxul.vercel.app/chef-recipe/${params.id}`),
      },
      {
        path: "/blog",
        element: <h3>welcome to blog</h3>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
