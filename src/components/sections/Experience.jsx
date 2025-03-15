"use client";

import React from 'react';

const ExperienceItem = ({ title, company, period, description }) => {
    return (
        <div className="relative pl-8 mb-12">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-sky-500 rounded-full"></div>
            <div className="absolute top-4 bottom-0 -left-0.5 w-0.5 bg-slate-700"></div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <div className="flex justify-between text-slate-400 mb-4">
                    <span className="text-sky-400 font-medium">{company}</span>
                    <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">{period}</span>
                </div>
                <p className="text-slate-400">{description}</p>
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
        <section id="experience" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Work Experience</h2>
                    <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full"></div>
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