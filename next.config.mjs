/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The résumé used to be a PDF; keep old shared links working.
    return [{ source: "/resume.pdf", destination: "/resume", permanent: true }];
  },
};

export default nextConfig;
