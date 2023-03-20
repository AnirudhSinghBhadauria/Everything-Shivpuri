import { NextResponse } from "next/server";

export function middleware(request) {
  let cookie = request.cookies.get("isLoggedIn")?.value;

  if (!cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/AddBusinesses",
};
