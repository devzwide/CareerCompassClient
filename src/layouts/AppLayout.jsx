import { Outlet, Link, useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.removeItem('authToken');
        navigate('/auth/login');
    };
    
    return { logout };
};

const AppLayout = () => {
    const { logout } = useAuth();

    return (
        <div className="flex min-h-screen">
            
            <nav className="w-64 flex-shrink-0 bg-white border-r border-[#e1e5df]">
                <div className="h-full flex flex-col p-4">
                    
                    <div className="flex items-center gap-3 px-4 pt-2 pb-6">
                        <Link to="/dashboard" className="flex items-center gap-3">
                            <img 
                                src="/compass.svg" 
                                alt="Career Compass Logo" 
                                className="h-9 w-9" 
                            />
                            <span className="text-xl font-bold text-[#454839]"> 
                                Career Compass
                            </span>
                        </Link>
                    </div>

                    <ul className="flex-grow space-y-2">
                        <li>
                            <Link 
                                to="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#616954] font-medium hover:bg-[#f8f9f7] hover:text-[#454839] transition-colors duration-200"
                            >
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/profile/me"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#616954] font-medium hover:bg-[#f8f9f7] hover:text-[#454839] transition-colors duration-200"
                            >
                                <span>My Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/settings"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#616954] font-medium hover:bg-[#f8f9f7] hover:text-[#454839] transition-colors duration-200"
                            >
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-auto">
                        <button 
                            onClick={logout} 
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-[#616954] font-medium hover:bg-[#f8f9f7] hover:text-[#454839] transition-colors duration-200"
                        >
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-grow p-6 md:p-10 bg-[#f8f9f7]"> 
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;