import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const getAuthToken = () => localStorage.getItem('authToken');

const UserProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = getAuthToken();
            if (!token) {
                navigate('/auth/login');
                return;
            }

            try {
                const response = await fetch(`/api/Profile/${userId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (response.status === 401) {
                    localStorage.removeItem('authToken');
                    navigate('/auth/login');
                    return;
                }
                if (response.status === 404) {
                    throw new Error('User not found.');
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch user profile.');
                }
                
                const data = await response.json();
                setProfile(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId, navigate]); 

    if (loading) return <div className="max-w-7xl mx-auto py-6 px-4">Loading profile...</div>;
    if (error) return <div className="max-w-7xl mx-auto py-6 px-4 p-4 bg-red-50 text-red-700 rounded-md">{error}</div>;
    if (!profile) return <div className="max-w-7xl mx-auto py-6 px-4">No profile data found.</div>;

    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {profile.fullName}'s Profile
            </h1>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Profile Header */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">{profile.fullName}</h2>
                    <p className="text-sm text-gray-600">{profile.username}</p>
                </div>

                {/* Profile Details */}
                <div className="border-t border-gray-200 p-6">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                        <div className="md:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900">{profile.location || 'Not set'}</dd>
                        </div>
                        <div className="md:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Bio</dt>
                            <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                                {profile.bio || 'No bio provided.'}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;