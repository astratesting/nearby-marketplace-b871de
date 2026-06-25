import { auth } from '@/lib/auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signup');
  const isApiAuth = req.nextUrl.pathname.startsWith('/api/auth');
  const isPublicPage = req.nextUrl.pathname === '/' || req.nextUrl.pathname.startsWith('/browse');

  if (isApiAuth) return;

  if (isAuthPage && isLoggedIn) {
    return Response.redirect(new URL('/dashboard', req.url));
  }

  if (!isLoggedIn && !isAuthPage && !isPublicPage) {
    return Response.redirect(new URL('/login', req.url));
  }
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
