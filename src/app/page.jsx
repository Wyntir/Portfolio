import Image from 'next/image';

export default function ResumePage() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8">
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Johan Ryu</h1>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    (773)-823-8058 | <a href="mailto:johanryu@iastate.edu" className="text-blue-500">johanryu@iastate.edu</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    <a href="https://www.johanryu.com" target="_blank" className="text-blue-500">www.johanryu.com</a> |
                    <a href="https://linkedin.com/in/johanryu" target="_blank" className="text-blue-500 ml-2">LinkedIn</a> |
                    <a href="https://github.com/WyntirR" target="_blank" className="text-blue-500 ml-2">GitHub</a>
                </p>
            </header>

            {/* Education Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Iowa State University</h3>
                    <p className="text-gray-700 dark:text-gray-400">
                        Bachelor of Science in Computer Science, Minor in Data Science
                        <br />
                        <span className="font-bold">GPA:</span> 3.67 - Expected Fall 2024
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>

                {/* Job 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web Developer Intern</h3>
                    <p className="text-gray-600 dark:text-gray-400">Pella Corp - May 2024 - Present</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-400">
                        <li>Worked with the Avanti dev team to create a reusable React component library on npm.</li>
                        <li>Implemented GitHub Actions for automated deployment and wrote unit tests.</li>
                        <li>Utilized Next.js, Expo, Tailwind CSS, and TurboRepo for efficient development.</li>
                    </ul>
                </div>

                {/* Job 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Iowa State University - Jan 2024 – Present</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-400">
                        <li>Maintained and enhanced virtual desktop infrastructure and wireless networks for 50,000+ users.</li>
                        <li>Reduced issue resolution time by 20% through expert technical support.</li>
                        <li>Led software analysis project, improving system performance by 15%.</li>
                    </ul>
                </div>

                {/* Additional Jobs */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Site Reliability Engineering Intern</h3>
                    <p className="text-gray-600 dark:text-gray-400">Buildertrend - May 2023 - Aug 2023</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-400">
                        <li>Developed a GCP Cloud Function to monitor Octopus Deploy, enhancing pipeline monitoring.</li>
                        <li>Integrated with APIs for automation, reducing manual tasks for the SRE team.</li>
                    </ul>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <ul className="list-disc ml-6 text-gray-700 dark:text-gray-400">
                        <li><span className="font-bold">Programming Languages:</span> Java, Python, C/C++, C#, SQL, JavaScript, HTML/CSS</li>
                        <li><span className="font-bold">Frameworks:</span> React, Next.js, JUnit, RestAPI, FastAPI</li>
                        <li><span className="font-bold">Tools:</span> Git, Docker, Azure DevOPS, GCP, Octopus Deploy, PagerDuty, GPT API</li>
                        <li><span className="font-bold">Languages:</span> English, Malay, Mandarin, Japanese</li>
                    </ul>
                </div>
            </section>

            {/* Leadership Section */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Leadership and Participation</h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <ul className="list-disc ml-6 text-gray-700 dark:text-gray-400">
                        <li><span className="font-bold">IEEK Honors Society:</span> Iowa State University (Oct 2022 – Present)</li>
                        <li><span className="font-bold">3D Printing Club:</span> Iowa State University (Aug 2023 – Present)</li>
                        <li><span className="font-bold">Data Science Club:</span> Iowa State University (Sep 2023 – Present)</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
