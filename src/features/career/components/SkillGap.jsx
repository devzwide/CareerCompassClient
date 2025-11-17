import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getAuthToken = () => localStorage.getItem('authToken');

const SkillGap = ({ careerId }) => {
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSkillGap = async () => {
            const token = getAuthToken();
            if (!token) {
                navigate('/auth/login');
                return;
            }
            
            setLoading(true);
            try {
                const response = await fetch(`/api/career/${careerId}/skillgap`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (response.status === 401) {
                    localStorage.removeItem('authToken');
                    navigate('/auth/login');
                    return;
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch skill gap analysis.');
                }
                
                const data = await response.json();
                setAnalysis(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSkillGap();
    }, [careerId, navigate]);

    if (loading) return <div className="bg-white border border-[#e1e5df] rounded-lg p-6 text-[#616954]">Loading Skill Gap...</div>;
    if (error) return <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-6">{error}</div>;
    if (!analysis) return <div className="bg-white border border-[#e1e5df] rounded-lg p-6 text-[#616954]">No skill gap data.</div>;

    return (
        <div className="bg-white border border-[#e1e5df] rounded-lg p-6 sticky top-6"> 
            <h2 className="text-2xl font-bold text-[#454839] mb-1"> 
                Skill Gap
            </h2>
            <p className="text-lg text-[#7d8a70] font-semibold mb-4"> 
                {analysis.careerTitle}
            </p>
            
            <ul className="space-y-3">
                {analysis.skills.map(skill => (
                    <li 
                        key={skill.skillName} 
                        className="flex items-center justify-between p-3 bg-[#f8f9f7] rounded-md" 
                    >
                        <span className="font-medium text-[#454839]">{skill.skillName}</span> 
                        {skill.hasSkill ? (
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                Have
                            </span>
                        ) : (
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                                Missing
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillGap;