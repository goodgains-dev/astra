/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'utfs.io',
      'img.clerk.com',
      'subdomain',
    ],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/workflow',
        destination: '/Feature1/index.html', // Serve the index.html file from the public folder
      },
    ];
  },
};

export default nextConfig;
