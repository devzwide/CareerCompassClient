import { Outlet, Link } from "react-router-dom";

const LandingLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* HEADER 
              Contains the logo, app name, and auth buttons.
            */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo and App Name */}
                    <Link to="/" className="flex items-center gap-3">
                        <img 
                            src="/compass.svg" 
                            alt="Career Compass Logo" 
                            className="h-8 w-8" // You can adjust the size
                        />
                        <span className="text-xl font-bold text-gray-800">
                            Career Compass
                        </span>
                    </Link>

                    {/* Navigation / Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Link 
                            to="/auth/login" 
                            className="text-gray-600 font-medium hover:text-blue-600"
                        >
                            Log In
                        </Link>
                        <Link 
                            to="/auth/signup" 
                            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </header>

            {/* MAIN CONTENT
              This is where your 'Home.jsx' page will be rendered.
            */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* FOOTER
              Simple copyright footer.
            */}
            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 py-6 text-center text-gray-500">
                    &copy; 2025 Career Compass. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingLayout;