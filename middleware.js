import { NextResponse } from 'next/server';
import urlMappings from './data/not-found-routes.json'; // Adjust the path as necessary

export function middleware(request) {
  const { pathname } = new URL(request.url);

  // Check if the pathname exists in the URL mappings
  if (urlMappings[pathname]) {
    console.log({ pathname })
    // Redirect to the corresponding valid URL
    return NextResponse.redirect(new URL(urlMappings[pathname], request.url));
  }

  // If no mapping exists, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
