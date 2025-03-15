import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <div className="relative overflow-hidden">
                {/* Pattern background with inline SVG */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/70 z-0"></div>

                {/* Glow effects */}
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500 rounded-full blur-[128px] opacity-20"></div>
                <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-10"></div>

                <div className="relative z-10 py-20 px-4 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500">
                        Johan Ryu
                    </h1>
                    <p className="mt-4 text-xl text-slate-400 font-light">Software Engineer & Designer</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href="#about" className="px-6 py-3 rounded-md bg-sky-600 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-500 transition-all">View My Work</a>
                        <a href="#contact" className="px-6 py-3 rounded-md bg-slate-800 border border-slate-700 text-white shadow-lg hover:bg-slate-700 transition-all">Contact Me</a>
                    </div>
                </div>
            </div>

            <About />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}