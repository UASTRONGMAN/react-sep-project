import {createBrowserRouter} from "react-router-dom";
import UnauthorizedLayout from "../layouts/UnauthorizedLayout.tsx";
import AuthPage from "../pages/AuthPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";


export const router = createBrowserRouter([
    {path:'', element:<UnauthorizedLayout/>},
    {path:'/login', element: <AuthPage/>},
    {path: '/auth', element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'recipes', element:<RecipesPage/>}
        ]}
]);