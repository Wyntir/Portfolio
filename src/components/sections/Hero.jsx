"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
    const [dots, setDots] = useState([]);

    useEffect(() => {
        // Generate dots only on client side to avoid hydration errors
        const newDots = Array(40).fill(0).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
        }));
        setDots(newDots);
    }, []);

    return (
        <section className="py-16 md:py-24 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10"></div>

            {/* Decorative dots */}
            <div className="absolute right-0 top-20 w-64 h-64 opacity-10">
                <div className="w-2 h-2 bg-indigo-600 rounded-full absolute"></div>
                {dots.map((dot) => (
                    <div
                        key={dot.id}
                        className="w-2 h-2 bg-indigo-600 rounded-full absolute"
                        style={{
                            top: dot.top,
                            left: dot.left,
                        }}
                    ></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Hi, I'm Johan Ryu
                            <span className="block text-indigo-600 mt-2">Software Engineer & Designer</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            I build exceptional digital experiences with modern technologies.
                            Focused on creating intuitive, high-performance web applications.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#about" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition shadow-sm hover:shadow">
                                View My Work
                            </Link>
                            <Link href="#contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition shadow-sm hover:shadow">
                                Get In Touch
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-tr from-indigo-100 to-cyan-50 rounded-xl p-8 relative z-10 shadow-smooth-lg transform transition hover:-translate-y-1 hover:shadow-xl duration-300">
                            <div className="w-full aspect-square rounded-lg bg-white shadow-smooth overflow-hidden"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-100 rounded-xl -z-10 opacity-70"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;