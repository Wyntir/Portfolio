"use client";

import React from 'react';

const ExperienceItem = ({ title, company, period, description }) => {
    return (
        <div className="relative pl-8 mb-12 group">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-sky-500 rounded-full z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sky-500/20">
                <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
                <div className="absolute inset-2 bg-sky-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-6 bottom-0 -left-0.5 w-0.5 bg-gradient-to-b from-sky-500 via-sky-500/50 to-transparent"></div>

            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 relative overflow-hidden">
                <div className="absolute -inset-3 bg-sky-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>

                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">{title}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400 mb-4 gap-2">
            <span className="text-sky-400 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
                {company}
            </span>
                        <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm inline-flex items-center self-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
                            {period}
            </span>
                    </div>
                    <p className="text-slate-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "TechVision Inc.",
            period: "2021 - Present",
            description: "Led the frontend team in developing a scalable SaaS platform, resulting in a 35% increase in user engagement. Implemented modern frontend architecture using Next.js and TypeScript, and mentored junior developers."
        },
        {
            title: "Frontend Developer",
            company: "WebSolutions Co.",
            period: "2019 - 2021",
            description: "Developed responsive web applications for various clients using React and Redux. Collaborated with designers to implement UI/UX improvements that increased conversion rates by 25%."
        },
        {
            title: "Junior Web Developer",
            company: "Digital Creatives",
            period: "2018 - 2019",
            description: "Built and maintained websites for small businesses using HTML, CSS, and JavaScript. Assisted in the development of a company-wide component library that improved development efficiency."
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            {/* Background texture */}
            <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] bg-repeat opacity-5"></div>

            {/* Gradient effects */}
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <div className="absolute right-1/3 top-1/4 w-96 h-96 bg-purple-700 rounded-full filter blur-[128px] opacity-10 mix-blend-multiply"></div>
            <div className="absolute left-1/3 bottom-1/4 w-96 h-96 bg-sky-700 rounded-full filter blur-[128px] opacity-10 mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Work Experience</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;