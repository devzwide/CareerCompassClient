import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LinkedInCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Same as the GitHub callback
        setTimeout(() => {
            navigate('/settings'); // Redirect to settings or profile
        }, 2000);
        
    }, [navigate]);

    return <div>Connecting your LinkedIn account... Please wait.</div>;
};

export default LinkedInCallback;