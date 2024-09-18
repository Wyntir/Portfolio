"use client"; // Ensures that the component uses client-side rendering

import { useState } from 'react';
import './globals.css'; // Assuming your Tailwind CSS and custom styles are correctly imported here

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <html lang="en" className={darkMode ? 'dark' : ''}>
        <head>
            <title>My Portfolio</title>
            <meta name="description" content="My personal portfolio website" />
        </head>
        <body className={darkMode ? 'dark-mode' : ''}>
        {/* Fixed Topbar */}
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Johan Ryu</h1>
                <nav className="space-x-4">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/projects" className="hover:underline">Projects</a>
                    <button
                        className="ml-4 bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </nav>
            </div>
        </header>

        {/* Flexbox Container for Sidebar and Content */}
        <div className="flex pt-16">
            {/* Scrollable Sidebar */}
            <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-gray-200 dark:bg-gray-800 p-4 overflow-y-auto">
                <nav className="space-y-4">
                    <a href="/#education" className="block text-gray-800 dark:text-gray-200 hover:underline">
                        Education
                    </a>
                    <a href="/#experience" className="block text-gray-800 dark:text-gray-200 hover:underline">
                        Experience
                    </a>
                    <a href="/#skills" className="block text-gray-800 dark:text-gray-200 hover:underline">
                        Skills
                    </a>
                    <a href="/#leadership" className="block text-gray-800 dark:text-gray-200 hover:underline">
                        Leadership
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 mt-20 p-8 flex-grow">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
