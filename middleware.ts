import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/men",
  "/women",
  "/accessories",
  "/blog",
  "/help",
  "/accessibility",
  "/email-signup",
  "/account/login",
  "/account/signup",
];

const isPublic = (path: string) => {
  return publicRoutes.some(route => path.startsWith(route));
};

export default clerkMiddleware();

// Stop Middleware running on static files and api routes
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};