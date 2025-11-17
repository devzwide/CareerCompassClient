import { useParams, useNavigate } from 'react-router-dom';
import SkillGap from '../components/SkillGap';
import Roadmap from '../components/Roadmap';

const CareerDetailPage = () => {
    const { careerId } = useParams(); 
    const navigate = useNavigate();

    if (!careerId) {
        navigate('/dashboard');
        return null; 
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 space-y-8 lg:space-y-0">
                
                <div className="lg:col-span-1">
                    <SkillGap careerId={careerId} />
                </div>
                
                <div className="lg:col-span-2">
                    <Roadmap careerId={careerId} />
                </div>
            </div>
        </div>
    );
};

export default CareerDetailPage;