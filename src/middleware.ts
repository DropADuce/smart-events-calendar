import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const apiURL = process.env.API_URL;

  const response = await fetch(`${apiURL}/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: request.headers.get("cookie") || "",
    },
  });

  if (!response.ok) {
    const redirect = new URL("/login", request.url);
    redirect.searchParams.set("redirect", request.nextUrl);

    return NextResponse.redirect(redirect);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/calendar"],
};
