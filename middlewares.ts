import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Get token from cookies

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect unauthenticated users
  }

  try {
    const user = verifyToken(token);
    if (!user) throw new Error("Invalid token");

    // Proceed to the requested page if the token is valid
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect dashboard and its subroutes
};
