import { Outlet, Link } from "react-router-dom";

const LandingLayout = () => {
    return (
        // Set the base text color for the whole page
        <div className="min-h-screen flex flex-col font-sans text-[#454839]">
            
            {/* HEADER
              - Swapped shadow for a subtle sage border
              - Updated all text and button colors to the Sage palette
            */}
            <header className="bg-white border-b border-[#e1e5df]"> {/* sage-200 border */}
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    
                    {/* Logo and App Name */}
                    <Link to="/" className="flex items-center gap-3">
                        <img 
                            src="/compass.svg" 
                            alt="Career Compass Logo" 
                            className="h-8 w-8"
                        />
                        <span className="text-xl font-bold text-[#454839]"> {/* sage-900 */}
                            Career Compass
                        </span>
                    </Link>

                    {/* Navigation / Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Link 
                            to="/auth/login" 
                            className="text-[#616954] font-medium hover:text-[#454839] transition-colors duration-300" /* sage-800 hover:sage-900 */
                        >
                            Log In
                        </Link>
                        <Link 
                            to="/auth/signup" 
                            // Primary "Sage" button
                            className="bg-[#B7BDA9] text-[#454839] font-semibold px-5 py-2 rounded-lg hover:bg-[#9aa48c] transition-colors duration-300" /* sage-500 bg, sage-900 text, hover:sage-600 */
                        >
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* FOOTER
              - Updated to use subtle Sage background and text colors
            */}
            <footer className="bg-[#f8f9f7] border-t border-[#e1e5df]"> {/* sage-50 bg, sage-200 border */}
                <div className="container mx-auto px-4 py-6 text-center text-[#7d8a70]"> {/* sage-700 text */}
                    &copy; 2025 Career Compass. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingLayout;