/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Keep static export, but allow dynamic routes
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true, // Required for static exports
    },
    distDir: 'out', // Ensures the build output goes to "out"
    experimental: {
        appDir: true, // Ensures correct app routing behavior
    },
    // Mark dynamic pages correctly to prevent build failures
    dynamicRouteFallback: true, // Ensures Next.js doesn’t fail on dynamic pages
};

export default nextConfig;
