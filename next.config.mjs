/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholders temporales servidos desde un CDN externo. Sustituir por
    // assets propios en /public/images y quitar remotePatterns cuando llegue
    // la fotografía editorial definitiva.
    remotePatterns: [{ protocol: "https", hostname: "www.virzua.com" }],
  },
};
export default nextConfig;
