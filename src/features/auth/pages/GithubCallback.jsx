import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GithubCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // This page itself doesn't do much. The backend handles the code
        // that's in the URL query string.
        // We just redirect back to the settings page after a short delay.
        
        // In a real app, you might wait for a signal or poll
        // the /api/Profile/me to see when the connection is active.
        
        setTimeout(() => {
            navigate('/settings'); // Redirect to settings or profile
        }, 2000); // 2-second delay to show message
        
    }, [navigate]);

    return <div>Connecting your GitHub account... Please wait.</div>;
};

export default GithubCallback;