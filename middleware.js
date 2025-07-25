import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en', 'ch'], // Diller
  defaultLocale: 'tr'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
