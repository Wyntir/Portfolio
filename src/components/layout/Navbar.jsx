"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 py-4 transition duration-300 ${
            scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">JR</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#about" className="text-gray-700 hover:text-indigo-600 transition font-medium">About</Link>
                        <Link href="#experience" className="text-gray-700 hover:text-indigo-600 transition font-medium">Experience</Link>
                        <Link href="#contact" className="text-gray-700 hover:text-indigo-600 transition font-medium">Contact</Link>
                    </div>

                    <div>
                        <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-5 py-2 rounded-md hover:from-indigo-700 hover:to-indigo-600 transition shadow-sm hover:shadow-md">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;