/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/tohosyoji',
    assetPrefix: '/tohosyoji/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
