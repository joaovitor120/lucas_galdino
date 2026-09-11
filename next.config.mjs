/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        // fontes e imagens são versionadas pelo nome do arquivo
        source: '/:all*(woff2|webp|jpg|png|ico)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  async redirects() {
    return [
      // URLs comerciais do site anterior continuam funcionando
      { source: '/contato', destination: '/#proposta', permanent: true },
      { source: '/palestras', destination: '/#palestras', permanent: true },
      { source: '/sobre', destination: '/#lucas', permanent: true },
    ];
  },
};

export default nextConfig;
