/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true, // Necessary for static exports
    },
    distDir: 'out',
};

export default nextConfig;
