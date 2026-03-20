import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // We handle TS errors in development; don't block production builds
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint already configured via .eslintrc.json
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default withNextIntl(nextConfig);
