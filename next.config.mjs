/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/outils", destination: "/", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/subscriptions", destination: "/#plans", permanent: true },
      { source: "/en/outils", destination: "/en", permanent: true },
      { source: "/en/faq", destination: "/en#faq", permanent: true },
      { source: "/en/subscriptions", destination: "/en#plans", permanent: true },
    ];
  },
};

export default nextConfig;
