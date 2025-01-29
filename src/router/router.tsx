import {createBrowserRouter} from "react-router-dom";
import UnauthorizedLayout from "../layouts/UnauthorizedLayout.tsx";
import AuthPage from "../pages/AuthPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import SingleUser from "../components/single-user/SingleUser.tsx";
import SingleRecipe from "../components/single-recipe/SingleRecipe.tsx";


export const router = createBrowserRouter([
    {path:'', element:<UnauthorizedLayout/>},
    {path:'/login', element: <AuthPage/>},
    {path: '/auth', element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'users/:id', element:<SingleUser/>},
            {path:'recipes', element:<RecipesPage/>},
            {path:'recipes/:id', element:<SingleRecipe/>}
        ]}
]);