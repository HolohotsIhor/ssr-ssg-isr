// import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isAuth = false;

export function middleware(request: NextRequest) {
    const isAbout = request.url.includes('about');
    // headers()
    // const token = cookies().get('token');

    if (isAbout) {
        if (isAuth) return NextResponse.next()

        return  NextResponse.redirect(new URL('/home', request.url))
    }

    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
}