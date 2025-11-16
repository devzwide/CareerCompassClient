import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* HERO SECTION
              The main "above the fold" content.
            */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-24 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Find Your Future in Tech.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
                        Stop guessing. Get AI-powered career recommendations,
                        skill-gap analysis, and a personalized roadmap to land 
                        your dream job.
                    </p>
                    <Link 
                        to="/auth/signup"
                        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
                    >
                        Get Started for Free
                    </Link>
                </div>
            </section>

            {/* FEATURES SECTION
              Highlights the 3 core features of your app.
            */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        How Career Compass Works
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1: Recommendations */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                                Smart Recommendations
                            </h3>
                            <p className="text-gray-700">
                                Discover careers that perfectly match your unique skills,
                                academic background, and project history.
                            </p>
                        </div>
                        
                        {/* Feature 2: Skill Gap */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                                Skill Gap Analysis
                            </h3>
                            <p className="text-gray-700">
                                See exactly which skills you're missing for your
                                target role and which ones are most in-demand.
                            </p>
                        </div>

                        {/* Feature 3: Roadmaps */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                                Personalized Roadmaps
                            </h3>
                            <p className="text-gray-700">
                                Get a custom, step-by-step learning plan, complete 
                                with resources, to bridge your skill gap fast.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;