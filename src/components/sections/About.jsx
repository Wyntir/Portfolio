"use client";

import React from 'react';

const SkillCard = ({ category, tech, icon, color, bgColor }) => {
    return (
        <div className={`${bgColor} backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:scale-105 group`}>
            <div className="flex items-center mb-3">
                <span className={`text-2xl mr-3 ${color} group-hover:scale-110 transition-transform`}>{icon}</span>
                <h3 className={`font-semibold text-xl ${color}`}>{category}</h3>
            </div>
            <p className="text-slate-400">{tech}</p>
        </div>
    );
};

const About = () => {
    const skills = [
        {
            category: "Frontend",
            tech: "React, NextJS, Tailwind CSS, TypeScript",
            icon: "⚛️",
            color: "text-sky-400",
            bgColor: "bg-slate-800/80"
        },
        {
            category: "Backend",
            tech: "Node.js, Express, GraphQL, MongoDB",
            icon: "🛠️",
            color: "text-teal-400",
            bgColor: "bg-slate-800/80"
        },
        {
            category: "Design",
            tech: "Figma, Adobe XD, UI/UX Principles",
            icon: "🎨",
            color: "text-purple-400",
            bgColor: "bg-slate-800/80"
        },
        {
            category: "Tools",
            tech: "Git, Docker, AWS, CI/CD",
            icon: "🔧",
            color: "text-amber-400",
            bgColor: "bg-slate-800/80"
        }
    ];

    return (
        <section id="about" className="py-24 relative">
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

            {/* Gradient accent */}
            <div className="absolute -left-64 top-1/3 w-96 h-96 bg-sky-700 rounded-full filter blur-[128px] opacity-20 mix-blend-multiply"></div>
            <div className="absolute -right-64 bottom-1/3 w-96 h-96 bg-purple-700 rounded-full filter blur-[128px] opacity-20 mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-4">About Me</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="backdrop-blur-sm bg-slate-800/80 p-8 rounded-lg shadow-xl border border-slate-700/50 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/10 rounded-full filter blur-3xl"></div>

                        <p className="text-lg text-slate-300 mb-6 relative z-10">
                            I'm a passionate software engineer with over 5 years of experience specializing in frontend development.
                            My journey in tech began with a curiosity about how things work on the web, which led me to dive deep into
                            modern JavaScript frameworks and UI/UX design principles.
                        </p>
                        <p className="text-lg text-slate-300 mb-6 relative z-10">
                            I believe in writing clean, maintainable code and creating intuitive user experiences that solve real problems.
                            When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {['React', 'NextJS', 'TypeScript', 'Node.js', 'Tailwind'].map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-slate-700/80 text-sky-400 rounded-full text-sm font-medium backdrop-blur-sm border border-sky-500/20 hover:border-sky-500/40 transition-colors"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;