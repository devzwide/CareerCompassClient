import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getAuthToken = () => localStorage.getItem('authToken');

const EditProfilePage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        location: '',
        gitHubProfileUrl: '',
        linkedInProfileUrl: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [saveMessage, setSaveMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = getAuthToken();
            if (!token) {
                navigate('/auth/login');
                return;
            }
            try {
                const response = await fetch('/api/Profile/me', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.status === 401) {
                    localStorage.removeItem('authToken');
                    navigate('/auth/login');
                    return;
                }
                if (!response.ok) throw new Error('Failed to fetch profile.');
                
                const data = await response.json();
                setFormData({
                    firstName: data.firstName || '',
                    lastName: data.lastName || '',
                    bio: data.bio || '',
                    location: data.location || '',
                    gitHubProfileUrl: data.gitHubProfileUrl || '',
                    linkedInProfileUrl: data.linkedInProfileUrl || ''
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSaveMessage('');
        const token = getAuthToken();

        const payload = {
            ...formData,
            gitHubProfileUrl: formData.gitHubProfileUrl || null,
            linkedInProfileUrl: formData.linkedInProfileUrl || null,
        };

        try {
            const response = await fetch('/api/Profile/me', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Failed to update profile. Please check your inputs.');
            
            setSaveMessage('Profile updated successfully!');
            setTimeout(() => navigate('/profile/me'), 1000);

        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div className="max-w-3xl mx-auto text-[#616954]">Loading form...</div>;

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-[#454839] mb-6">Edit Profile</h1> 

            <div className="bg-white border border-[#e1e5df] rounded-lg p-6"> 
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <div className="p-3 rounded-md bg-red-50 text-red-700">{error}</div>}
                    {saveMessage && <div className="p-3 rounded-md bg-green-50 text-green-700">{saveMessage}</div>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-[#616954]">First Name</label> 
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" 
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-[#616954]">Last Name</label> 
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" 
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-[#616954]">Bio</label> 
                        <textarea
                            name="bio"
                            id="bio"
                            rows="4"
                            value={formData.bio}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9] min-h-[120px]" 
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-[#616954]">Location</label> 
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" 
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="gitHubProfileUrl" className="block text-sm font-medium text-[#616954]">GitHub URL</label> 
                        <input
                            type="url"
                            name="gitHubProfileUrl"
                            id="gitHubProfileUrl"
                            value={formData.gitHubProfileUrl}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" 
                        />
                    </div>

                    <div>
                        <label htmlFor="linkedInProfileUrl" className="block text-sm font-medium text-[#616954]">LinkedIn URL</label> 
                        <input
                            type="url"
                            name="linkedInProfileUrl"
                            id="linkedInProfileUrl"
                            value={formData.linkedInProfileUrl}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-[#d1d7ce] rounded-md shadow-sm focus:outline-none focus:ring-[#B7BDA9] focus:border-[#B7BDA9]" 
                        />
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <button 
                            type="button" 
                            onClick={() => navigate('/profile/me')}
                            className="bg-white py-2 px-4 border border-[#d1d7ce] rounded-md shadow-sm text-sm font-medium text-[#616954] hover:bg-[#f8f9f7] focus:outline-none" 
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="bg-[#B7BDA9] text-[#454839] font-semibold px-5 py-2 rounded-lg hover:bg-[#9aa48c] transition-colors duration-300" 
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfilePage;