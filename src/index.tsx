import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "components/main";
import ErrorPage from "components/error";
import Routes from 'routes/Routes'
import Login from "components/login"

const router = createBrowserRouter([
    {
        path: Routes.Main,
        element: <Main />,
        errorElement: <ErrorPage />,
    },{
        path: Routes.Login,
        element: <Login />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as Element | DocumentFragment).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);