import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

const DashboardPage = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecommendations = async () => {
            const token = getAuthToken();
            if (!token) {
                // If no token, redirect to login
                navigate('/auth/login');
                return;
            }

            try {
                const response = await fetch('/api/career/recommendations', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (response.status === 401) {
                    // Token is invalid or expired
                    localStorage.removeItem('authToken');
                    navigate('/auth/login');
                    return;
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch recommendations.');
                }
                
                const data = await response.json();
                setRecommendations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, [navigate]);

    // --- Loading and Error States ---
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto py-6 px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
                <p>Loading your recommendations...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto py-6 px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
                <p className="p-4 bg-red-50 text-red-700 rounded-md">{error}</p>
            </div>
        );
    }

    // --- Main Content ---
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Your Career Recommendations
            </h1>

            {recommendations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendations.map(career => (
                        <div 
                            key={career.id} 
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
                        >
                            <h2 className="text-xl font-semibold text-blue-600 mb-2">
                                {career.title}
                            </h2>
                            <span className="text-sm font-medium text-gray-500 mb-3">
                                Composite Score: {career.compositeScore.toFixed(2)}
                            </span>
                            <p className="text-gray-700 mb-4 flex-grow">
                                {career.description}
                            </p>
                            <Link 
                                to={`/career/${career.id}`}
                                className="mt-auto block w-full text-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">No recommendations yet.</h2>
                    <p className="text-gray-600">
                        Try connecting your GitHub or LinkedIn accounts to get personalized recommendations.
                    </p>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;