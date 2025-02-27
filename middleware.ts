import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|account/login/.*|account/signup/.*|men|women|accessories|blog|help|accessibility|email-signup).*)",
  ],
};