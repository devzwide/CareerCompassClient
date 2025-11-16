import { createBrowserRouter } from "react-router-dom";

// Layouts
import LandingLayout from "../features/landing/LandingLayout.jsx";
import AuthLayout from "../features/auth/AuthLayout.jsx";
import AppLayout from "../layouts/AppLayout.jsx";

// Public Pages
import Home from "../features/landing/pages/Home.jsx";
import Login from "../features/auth/pages/Login.jsx";
import Signup from "../features/auth/pages/Signup.jsx";
import GithubCallback from "../features/auth/pages/GithubCallback.jsx";
import LinkedInCallback from "../features/auth/pages/LinkedInCallback.jsx";

// Private (Authenticated) Pages
import DashboardPage from "../features/dashboard/pages/DashboardPage.jsx";
import MyProfilePage from "../features/profile/pages/MyProfilePage.jsx";
import EditProfilePage from "../features/profile/pages/EditProfilePage.jsx";
import UserProfilePage from "../features/profile/pages/UserProfilePage.jsx";
import CareerDetailPage from "../features/career/pages/CareerDetailPage.jsx";
import SettingsPage from "../features/settings/pages/SettingsPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
        children: [
            { path: "", element: <Home /> }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
            // These paths should match your .NET ConnectController redirects
            { path: "github/callback", element: <GithubCallback /> },
            { path: "linkedin/callback", element: <LinkedInCallback /> }
        ]
    },
    {
        path: "/",
        element: <AppLayout />, 
        children: [
            {
                path: "dashboard",
                element: <DashboardPage />
            },
            {
                path: "profile/me",
                element: <MyProfilePage />
            },
            {
                path: "profile/edit",
                element: <EditProfilePage />
            },
            {
                path: "profile/user/:userId", 
                element: <UserProfilePage />
            },
            {
                path: "career/:careerId",
                element: <CareerDetailPage />
            },
            {
                path: "settings",
                element: <SettingsPage />
            }
        ]
    }
]);

export default router;