import { createBrowserRouter } from "react-router-dom";

import LandingLayout from "../features/landing/LandingLayout.jsx";
import Home from "../features/landing/pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
]);

export default router;