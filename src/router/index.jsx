import { createBrowserRouter } from 'react-router-dom';
import Layout from "../layout/Layout";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';
import PrivateRoutes from '../utils/PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Welcome />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/myImages",
                element: <PrivateRoutes><Home /></PrivateRoutes>
            },
        ]
    }
]); 
/* const Routes = () => {
    const { token } = useAuth();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/login",
            element: <Login />,
        },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <Layout />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/logout",
                    element: <Logout/>,
                },
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/login",
            element: <Login />,
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes; */