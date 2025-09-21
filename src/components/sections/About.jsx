import { RevealOnScroll } from "./RevealOnScroll";
export const About = () => {

    const Development = ["React", "TailwindCSS", "Unreal Engine", "Blueprint Scripting", "Game Design", "Level Design"];

    const Media = ["Content Creation", "Video Editing", "Community Engagement"];

    const Performance = ["Modeling", "Stage Piano Experience", "Media Presence"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    {/* Heading gradient updated */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate developer and musician with experience in game developement in Unreal Engine and producing in FL Studio.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Development.map((tech, key) => (
                                        <span 
                                            key={key} 
                                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Creative Media</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Media.map((tech, key) => (
                                        <span 
                                            key={key} 
                                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Performance</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Performance.map((tech, key) => (
                                        <span 
                                            key={key} 
                                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Self Taught</strong> by online tutorials over the past 6 years
                                </li>
                                <li>
                                    Relevant Coursework: Web Devlopement, Game Development, Game Design, Level Design...
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Game Developer at Stopshut Games (2023 - Present)</h4>
                                    <p>Designed and developed original titles using Unreal Engine. Produced engaging YouTube content to showcase projects and grow a dedicated audience.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Model for TCM Models and Talent (2025 - Present)</h4>
                                    <p>Collaborated with photographers, stylists, and brands to create professional campaigns and portfolio work. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
