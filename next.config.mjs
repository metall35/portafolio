/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: false // Turbopack puede tener conflictos con Tailwind
    }
};

export default nextConfig;
