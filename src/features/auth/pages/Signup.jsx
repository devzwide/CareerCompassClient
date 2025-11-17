import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username, email, password, firstName, lastName
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
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
                Create your account
            </h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#616954]">First Name</label> {/* sage-800 */}
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" /* sage-300 border, focus:sage-500 */
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#616954]">Last Name</label> {/* sage-800 */}
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" /* sage-300 border, focus:sage-500 */
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-[#616954]">Username</label> {/* sage-800 */}
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" /* sage-300 border, focus:sage-500 */
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#616954]">Email address</label> {/* sage-800 */}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" /* sage-300 border, focus:sage-500 */
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-[#616954]">Password</label> {/* sage-800 */}
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="new-password"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" /* sage-300 border, focus:sage-500 */
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

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
                        Create Account
                    </button>
                </div>
            </form>

            <p className="mt-6 text-center text-sm text-[#616954]"> {/* sage-800 */}
                Already have an account?{' '}
                <Link to="/auth/login" className="font-medium text-[#7d8a70] hover:text-[#454839] transition-colors duration-300"> {/* sage-700, hover:sage-900 */}
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default Signup;