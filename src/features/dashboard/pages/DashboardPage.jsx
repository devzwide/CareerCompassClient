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
                navigate('/auth/login');
                return;
            }

            try {
                const response = await fetch('/api/career/recommendations', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (response.status === 401) {
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

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-[#454839] mb-6">Dashboard</h1> 
                <p className="text-[#616954]">Loading your recommendations...</p> 
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-[#454839] mb-6">Dashboard</h1> 
                <p className="p-4 bg-red-50 text-red-700 rounded-md">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[#454839] mb-6"> 
                Your Career Recommendations
            </h1>

            {recommendations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendations.map(career => (
                        <div 
                            key={career.id} 
                            className="bg-white border border-[#e1e5df] rounded-lg p-6 flex flex-col" 
                        >
                            <h2 className="text-xl font-semibold text-[#7d8a70] mb-2"> 
                                {career.title}
                            </h2>
                            <span className="text-sm font-medium text-[#9aa48c] mb-3">
                                Composite Score: {career.compositeScore.toFixed(2)}
                            </span>
                            <p className="text-[#616954] mb-4 flex-grow"> 
                                {career.description}
                            </p>
                            <Link 
                                to={`/career/${career.id}`}
                                className="mt-auto block w-full text-center bg-[#B7BDA9] text-[#454839] font-semibold px-4 py-2 rounded-lg hover:bg-[#9aa48c] transition-colors duration-300" /* sage-500 bg, sage-900 text, hover:sage-600 */
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white border border-[#e1e5df] rounded-lg p-8 text-center"> 
                    <h2 className="text-xl font-semibold text-[#454839] mb-2">No recommendations yet.</h2> 
                    <p className="text-[#616954]"> 
                        Try connecting your GitHub or LinkedIn accounts to get personalized recommendations.
                    </p>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;