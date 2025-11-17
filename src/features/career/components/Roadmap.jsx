import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getAuthToken = () => localStorage.getItem('authToken');

const Roadmap = ({ careerId }) => {
    const [roadmap, setRoadmap] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoadmap = async () => {
            const token = getAuthToken();
            if (!token) {
                navigate('/auth/login');
                return;
            }
            
            setLoading(true);
            try {
                const response = await fetch(`/api/roadmap/${careerId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                
                if (response.status === 401) {
                    localStorage.removeItem('authToken');
                    navigate('/auth/login');
                    return;
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch roadmap.');
                }
                
                const data = await response.json();
                setRoadmap(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRoadmap();
    }, [careerId, navigate]);

    if (loading) return <div className="bg-white border border-[#e1e5df] rounded-lg p-6 text-[#616954]">Loading Roadmap...</div>;
    if (error) return <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-6">{error}</div>;
    if (!roadmap) return <div className="bg-white border border-[#e1e5df] rounded-lg p-6 text-[#616954]">No roadmap data.</div>;

    return (
        <div className="bg-white border border-[#e1e5df] rounded-lg p-6"> 
            <h2 className="text-2xl font-bold text-[#454839] mb-2"> 
                Your Roadmap: {roadmap.title}
            </h2>
            <p className="text-[#616954] mb-8"> 
                {roadmap.description}
            </p>

            <ol className="relative border-l border-[#d1d7ce]"> 
                {roadmap.steps.map(step => (
                    <li key={step.stepOrder} className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#f0f2ef] rounded-full -left-3 ring-8 ring-white"> 
                            <span className="text-[#7d8a70] font-bold">{step.stepOrder}</span> 
                        </span>
                        
                        <div className="p-4 bg-[#f8f9f7] rounded-lg border border-[#e1e5df]"> 
                            <h3 className="text-xl font-semibold text-[#454839] mb-1"> 
                                {step.stepTitle}
                            </h3>
                            <span className="block mb-2 text-sm font-normal leading-none text-[#7d8a70]"> 
                                Resource Type: {step.resourceType}
                            </span>
                            <p className="mb-4 text-base font-normal text-[#616954]"> 
                                {step.stepDescription}
                            </p>
                            <a 
                                href={step.resourceUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#7d8a70] bg-white border border-[#d1d7ce] rounded-lg hover:bg-[#f8f9f7] hover:text-[#454839] focus:z-10 transition-colors duration-200" 
                            >
                                {step.resourceName}
                                <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Roadmap;