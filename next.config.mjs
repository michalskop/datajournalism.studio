/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'vercel-generated-url.vercel.app' }],
        destination: 'https://datajournalism.studio',
        permanent: true,
      },
    ];
  },
  // Add other Next.js config options here
};


export default nextConfig;