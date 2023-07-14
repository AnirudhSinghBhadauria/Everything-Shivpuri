import { NextResponse } from "next/server";

export function middleware(request) {
  let cookie = request.cookies.get("isLoggedIn")?.value;
  console.log(cookie);

  if (cookie !== 'true') {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/AddBusinesses",
};
