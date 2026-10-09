/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    // Caché larga en imágenes y video (1 semana + revalidación en segundo plano).
    const cache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }];
    return [
      { source: "/images/:path*", headers: cache },
      { source: "/video/:path*", headers: cache },
    ];
  },
  images: {
    // Placeholders temporales servidos desde un CDN externo. Sustituir por
    // assets propios en /public/images y quitar remotePatterns cuando llegue
    // la fotografía editorial definitiva.
    remotePatterns: [{ protocol: "https", hostname: "www.virzua.com" }],
  },
};
export default nextConfig;
