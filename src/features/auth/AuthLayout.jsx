import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
    return (
        // Full-screen background, centering content
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
            <div className="w-full max-w-md">
                {/* Logo and App Name */}
                <div className="flex justify-center items-center gap-3 mb-6">
                    <Link to="/" className="flex items-center gap-3">
                        <img 
                            src="/compass.svg" 
                            alt="Career Compass Logo" 
                            className="h-10 w-10" 
                        />
                        <span className="text-2xl font-bold text-gray-800">
                            Career Compass
                        </span>
                    </Link>
                </div>
                
                {/* The white card that will hold the Login/Signup form */}
                <div className="bg-white p-8 shadow-xl rounded-lg">
                    {/* This renders the active child route (Login or Signup) */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;