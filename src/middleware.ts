import { NextResponse } from "next/server";

// Remove the createRouteMatcher and clerkMiddleware references

export function middleware() {
  // Define any custom logic you need for your middleware here
  // Example: Redirect if user is not authenticated

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
