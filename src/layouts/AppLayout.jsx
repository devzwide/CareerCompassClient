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
        <div>
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f0f0' }}>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile/me">My Profile</Link>
                <Link to="/settings">Settings</Link>
                <button onClick={logout} style={{ marginLeft: 'auto' }}>Logout</button>
            </nav>
            <main style={{ padding: '1rem' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;