import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emailOrUsername, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json(); 
            localStorage.setItem('authToken', data.token);
            navigate('/dashboard');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
                Log in to your account
            </h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label 
                        htmlFor="emailOrUsername" 
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email or Username
                    </label>
                    <div className="mt-1">
                        <input
                            id="emailOrUsername"
                            name="emailOrUsername"
                            type="text"
                            autoComplete="email"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label 
                        htmlFor="password" 
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {/* Error message */}
                {error && (
                    <div>
                        <p className="text-sm text-red-600">{error}</p>
                    </div>
                )}

                <div>
                    <button 
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Log In
                    </button>
                </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign up here
                </Link>
            </p>
        </div>
    );
};

export default Login;