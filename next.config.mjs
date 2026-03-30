import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
const nextConfig = { typescript:{ignoreBuildErrors:true}, eslint:{ignoreDuringBuilds:true}, images:{unoptimized:true} };
export default withNextIntl(nextConfig);
