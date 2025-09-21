import { RevealOnScroll } from "./RevealOnScroll";
export const Projects =  () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    {/* Gradient updated */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project card */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Tilt</h3>
                            <p className="text-gray-400 mb-4">A gravity-based first-person platform puzzle made in Unreal Engine 5</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Unreal Engine", "Blueprint Scripting", "Game Design", "Level Design"].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4"> View Project → </a>
                            </div>
                        </div>

                        {/* Repeat same red theme for other projects */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Basics In Intermediate Filmmaking</h3>
                            <p className="text-gray-400 mb-4">A first-person puzzle horror made in Unreal Engine 5</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Unreal Engine", "Blueprint Scripting", "Game Design", "Level Design"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4"> View Project → </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Food Fight</h3>
                            <p className="text-gray-400 mb-4">A top-down retro shooter made in Gamemaker, also the first game I ever released</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["GMS Code", "Game Design", "Level Design"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4"> View Project → </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Pianicam</h3>
                            <p className="text-gray-400 mb-4">My piano TikTok page with 100k+ followers</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Content Creation", "Video Editing", "Community Engagement", "Media Presence"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4"> View Project → </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Stopshut Games</h3>
                            <p className="text-gray-400 mb-4">My game development YouTube channel</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Content Creation", "Video Editing", "Community Engagement", "Media Presence", "Unreal Engine", "Game Design"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4"> View Project → </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
