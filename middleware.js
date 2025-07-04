import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request) {
  const sessionCookie = getSessionCookie(request);
  //console.log("sessionCookie", sessionCookie);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
