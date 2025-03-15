/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Use 'standalone' if deploying on a Node.js server
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true, // Required for static exports
    },
    distDir: 'out', // Ensures build output is placed in the 'out' directory
};

export default nextConfig;
