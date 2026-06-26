/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // libro.gabiuccello.com/ → /venta (la landing page de ventas es el home)
      { source: '/', destination: '/venta', permanent: false },
    ];
  },
  async rewrites() {
    return [
      // libro.gabiuccello.com/venta → sirve el archivo estático public/venta.html
      { source: '/venta', destination: '/venta.html' },
      // libro.gabiuccello.com/venta2 → variante low-ticket (A/B contra /venta)
      { source: '/venta2', destination: '/venta2.html' },
    ];
  },
};

export default nextConfig;
