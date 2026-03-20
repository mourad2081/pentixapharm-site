import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de', 'fr', 'ar'],
  defaultLocale: 'en'
});

export const config = {
  // Exclude: api, _next, static files, admin, analytics
  matcher: ['/((?!api|_next|.*\\..*|admin|analytics).*)']
};
