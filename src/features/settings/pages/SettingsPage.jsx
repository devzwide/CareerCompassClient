const SettingsPage = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Settings
            </h1>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Connect Accounts
                </h2>
                <p className="text-gray-600 mb-6">
                    Connect your external accounts to import skills, projects, and work history. This helps us build a more accurate profile and provide better recommendations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* GitHub Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            GitHub
                        </h3>
                        <p className="text-gray-700 mb-4 flex-grow">
                            Links your GitHub account to analyze your repositories, languages, and contribution activity.
                        </p>
                        {/* The <a> tag is styled to look like a button.
                          It links directly to your backend /api/connect/github endpoint.
                        */}
                        <a 
                            href="/api/connect/github"
                            className="mt-auto block w-full text-center bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                        >
                            Connect GitHub
                        </a>
                    </div>
                    
                    {/* LinkedIn Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            LinkedIn
                        </h3>
                        <p className="text-gray-700 mb-4 flex-grow">
                            Links your LinkedIn account to import your profile summary, work experience, and endorsed skills.
                        </p>
                        <a 
                            href="/api/connect/linkedin"
                            className="mt-auto block w-full text-center bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            Connect LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;