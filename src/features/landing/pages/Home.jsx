import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* --- Hero Section --- */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-24 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#454839] leading-tight mb-6"> {/* sage-900 */}
                        Find Your Future in Tech.
                    </h1>
                    <p className="text-lg md:text-xl text-[#616954] max-w-3xl mx-auto mb-10"> {/* sage-800 */}
                        Stop guessing. Get AI-powered career recommendations,
                        skill-gap analysis, and a personalized roadmap to land 
                        your dream job.
                    </p>
                    <Link 
                        to="/auth/signup"
                        // Primary "Sage" button
                        className="bg-[#B7BDA9] text-[#454839] font-semibold px-8 py-3 rounded-lg text-lg hover:bg-[#9aa48c] shadow hover:shadow-md transition-all duration-300" /* sage-500 bg, sage-900 text, hover:sage-600 */
                    >
                        Get Started for Free
                    </Link>
                </div>
            </section>

            {/* --- Features Section --- */}
            <section className="bg-[#f8f9f7]"> {/* sage-50 */}
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold text-center text-[#454839] mb-12"> {/* sage-900 */}
                        How Career Compass Works
                    </h2>
                    
                    {/* Responsive 3-column grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        
                        {/* Feature Card 1 (Minimal Style) */}
                        <div className="bg-white p-8 rounded-xl border border-[#e1e5df]"> {/* sage-200 border */}
                            {/* You can add an SVG icon here */}
                            <h3 className="text-2xl font-semibold text-[#454839] mb-3"> {/* sage-900 */}
                                Smart Recommendations
                            </h3>
                            <p className="text-[#616954]"> {/* sage-800 */}
                                Discover careers that perfectly match your unique skills,
                                academic background, and project history.
                            </p>
                        </div>
                        
                        {/* Feature Card 2 (Minimal Style) */}
                        <div className="bg-white p-8 rounded-xl border border-[#e1e5df]"> {/* sage-200 border */}
                            {/* You can add an SVG icon here */}
                            <h3 className="text-2xl font-semibold text-[#454839] mb-3"> {/* sage-900 */}
                                Skill Gap Analysis
                            </h3>
                            <p className="text-[#616954]"> {/* sage-800 */}
                                See exactly which skills you're missing for your
                                target role and which ones are most in-demand.
                            </p>
                        </div>

                        {/* Feature Card 3 (Minimal Style) */}
                        <div className="bg-white p-8 rounded-xl border border-[#e1e5df]"> {/* sage-200 border */}
                            {/* You can add an SVG icon here */}
                            <h3 className="text-2xl font-semibold text-[#454839] mb-3"> {/* sage-900 */}
                                Personalized Roadmaps
                            </h3>
                            <p className="text-[#616954]"> {/* sage-800 */}
                                Get a custom, step-by-step learning plan, complete 
                                with resources, to bridge your skill gap fast.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-24 text-center">
                    <h2 className="text-3xl font-bold text-[#454839] mb-4"> {/* sage-900 */}
                        Ready to Find Your Path?
                    </h2>
                    <p className="text-lg text-[#616954] max-w-xl mx-auto mb-8"> {/* sage-800 */}
                        Start building your future today. It's free to get started.
                    </p>
                    <Link 
                        to="/auth/signup"
                        // Consistent "Sage" button
                        className="bg-[#B7BDA9] text-[#454839] font-semibold px-8 py-3 rounded-lg text-lg hover:bg-[#9aa48c] shadow hover:shadow-md transition-all duration-300" /* sage-500 bg, sage-900 text, hover:sage-600 */
                    >
                        Create Your Free Account
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;