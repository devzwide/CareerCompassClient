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
            <h2 className="text-center text-3xl font-bold text-[#454839] mb-6"> {/* sage-900 */}
                Log in to your account
            </h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label 
                        htmlFor="emailOrUsername" 
                        className="block text-sm font-medium text-[#616954]" /* sage-800 */
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
                            className="block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" /* sage-300 border, focus:sage-500 */
                            value={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label 
                        htmlFor="password" 
                        className="block text-sm font-medium text-[#616954]" /* sage-800 */
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
                            className="block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" /* sage-300 border, focus:sage-500 */
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
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-[#454839] bg-[#B7BDA9] hover:bg-[#9aa48c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B7BDA9] transition-colors duration-300" /* sage-500 bg, sage-900 text, hover:sage-600 */
                    >
                        Log In
                    </button>
                </div>
            </form>

            <p className="mt-6 text-center text-sm text-[#616954]"> {/* sage-800 */}
                Don't have an account?{' '}
                <Link to="/auth/signup" className="font-medium text-[#7d8a70] hover:text-[#454839] transition-colors duration-300"> {/* sage-700, hover:sage-900 */}
                    Sign up here
                </Link>
            </p>
        </div>
    );
};

export default Login;