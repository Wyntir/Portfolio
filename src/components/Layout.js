"use client";

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-600">© {currentYear} Johan Ryu. All rights reserved.</p>
                <p className="text-gray-500 mt-2">Built with Next.js and Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;