'use client';

import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-8">Create Account</h1>
          <div className="w-full max-w-[400px]">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary: 
                    "bg-black hover:bg-black/80 text-white",
                  footerActionLink: 
                    "text-black hover:text-black/80",
                  card: 
                    "shadow-none",
                }
              }}
              redirectUrl="/account"
              signInUrl="/account/login"
            />
          </div>
        </div>
      </div>
    </main>
  );
} 