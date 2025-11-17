import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
    return (
        // Full-screen background (sage-50), centering content
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9f7] py-12 px-4 text-[#454839]">
            <div className="w-full max-w-md">
                {/* Logo and App Name */}
                <div className="flex justify-center items-center gap-3 mb-6">
                    <Link to="/" className="flex items-center gap-3">
                        <img 
                            src="/compass.svg" 
                            alt="Career Compass Logo" 
                            className="h-10 w-10" 
                        />
                        <span className="text-2xl font-bold text-[#454839]"> {/* sage-900 */}
                            Career Compass
                        </span>
                    </Link>
                </div>
                
                {/* The white card that will hold the Login/Signup form */}
                <div className="bg-white p-8 shadow-lg rounded-lg border border-[#e1e5df]"> {/* sage-200 border */}
                    {/* This renders the active child route (Login or Signup) */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;