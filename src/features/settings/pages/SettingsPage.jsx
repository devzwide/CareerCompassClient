const SettingsPage = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[#454839] mb-6"> 
                Settings
            </h1>

            <div className="bg-white border border-[#e1e5df] rounded-lg p-6"> 
                <h2 className="text-2xl font-semibold text-[#454839] mb-4"> 
                    Connect Accounts
                </h2>
                <p className="text-[#616954] mb-6"> 
                    Connect your external accounts to import skills, projects, and work history. This helps us build a more accurate profile and provide better recommendations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#f8f9f7] border border-[#e1e5df] rounded-lg p-6 flex flex-col"> 
                        <h3 className="text-xl font-semibold text-[#454839] mb-2"> 
                            GitHub
                        </h3>
                        <p className="text-[#616954] mb-4 flex-grow"> 
                            Links your GitHub account to analyze your repositories, languages, and contribution activity.
                        </p>
                        <a 
                            href="/api/connect/github"
                            className="mt-auto block w-full text-center bg-[#454839] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#616954] transition-colors duration-300" 
                        >
                            Connect GitHub
                        </a>
                    </div>
                    
                    <div className="bg-[#f8f9f7] border border-[#e1e5df] rounded-lg p-6 flex flex-col"> 
                        <h3 className="text-xl font-semibold text-[#454839] mb-2"> 
                            LinkedIn
                        </h3>
                        <p className="text-[#616954] mb-4 flex-grow"> 
                            Links your LinkedIn account to import your profile summary, work experience, and endorsed skills.
                        </p>
                        <a 
                            href="/api/connect/linkedin"
                            className="mt-auto block w-full text-center bg-[#B7BDA9] text-[#454839] font-semibold px-4 py-2 rounded-lg hover:bg-[#9aa48c] transition-colors duration-300" 
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