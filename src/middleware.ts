// import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log(request);
    // return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ["/auth/:path*", "/dashboard/:path*"],
};