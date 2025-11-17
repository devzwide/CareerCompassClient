import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const getAuthToken = () => localStorage.getItem('authToken');

const MyProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                if (!response.ok) {
                    throw new Error('Failed to fetch profile.');
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
    }, [navigate]);

    if (loading) return <div className="max-w-7xl mx-auto text-[#616954]">Loading profile...</div>;
    if (error) return <div className="max-w-7xl mx-auto p-4 bg-red-50 text-red-700 rounded-md">{error}</div>;
    if (!profile) return <div className="max-w-7xl mx-auto text-[#616954]">No profile data found.</div>;

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[#454839] mb-6">My Profile</h1> 

            <div className="bg-white border border-[#e1e5df] rounded-lg overflow-hidden"> 
                <div className="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-[#454839]">{profile.fullName}</h2> 
                        <p className="text-sm text-[#616954]">{profile.email}</p> 
                    </div>
                    <Link 
                        to="/profile/edit" 
                        className="w-full sm:w-auto text-center bg-[#B7BDA9] text-[#454839] font-semibold px-5 py-2 rounded-lg hover:bg-[#9aa48c] transition-colors duration-300" 
                    >
                        Edit Profile
                    </Link>
                </div>

                <div className="border-t border-[#e1e5df] p-6"> 
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                        <div className="md:col-span-1">
                            <dt className="text-sm font-medium text-[#7d8a70]">Username</dt> 
                            <dd className="mt-1 text-sm text-[#454839]">{profile.username}</dd> 
                        </div>
                        <div className="md:col-span-1">
                            <dt className="text-sm font-medium text-[#7d8a70]">Location</dt> 
                            <dd className="mt-1 text-sm text-[#454839]">{profile.location || 'Not set'}</dd> 
                        </div>
                        <div className="md:col-span-2">
                            <dt className="text-sm font-medium text-[#7d8a70]">Bio</dt> 
                            <dd className="mt-1 text-sm text-[#454839] whitespace-pre-wrap"> 
                                {profile.bio || 'No bio provided.'}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="mt-6 bg-[#f8f9f7] border border-[#e1e5df] text-[#616954] p-4 rounded-lg"> 
                <h3 className="text-lg font-semibold mb-2 text-[#454839]">Raw Data</h3> 
                <pre className="text-sm overflow-x-auto">{JSON.stringify(profile, null, 2)}</pre>
            </div>
        </div>
    );
};

export default MyProfilePage;