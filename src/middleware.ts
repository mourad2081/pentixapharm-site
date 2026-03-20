import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['de', 'en', 'fr', 'ar'],
  defaultLocale: 'de'
});

export const config = {
  // Exclude: api, _next, static files, admin, analytics
  matcher: ['/((?!api|_next|.*\\..*|admin|analytics).*)']
};
