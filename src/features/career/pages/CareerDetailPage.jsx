import { useParams, useNavigate } from 'react-router-dom';
import SkillGap from '../components/SkillGap';
import Roadmap from '../components/Roadmap';

const CareerDetailPage = () => {
    const { careerId } = useParams(); 
    const navigate = useNavigate();

    if (!careerId) {
        // Redirect to dashboard if ID is missing
        navigate('/dashboard');
        return null; 
    }

    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            {/* This is a responsive grid layout.
              - On mobile: A single column (SkillGap, then Roadmap).
              - On large screens (lg): A 3-column grid is established.
                - SkillGap takes 1 column.
                - Roadmap takes 2 columns.
            */}
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 space-y-8 lg:space-y-0">
                
                {/* --- Left Column (Skill Gap) --- */}
                <div className="lg:col-span-1">
                    <SkillGap careerId={careerId} />
                </div>
                
                {/* --- Right Column (Roadmap) --- */}
                <div className="lg:col-span-2">
                    <Roadmap careerId={careerId} />
                </div>
            </div>
        </div>
    );
};

export default CareerDetailPage;