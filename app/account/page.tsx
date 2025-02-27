'use client';

import { useUser, UserButton, useAuth } from "@clerk/nextjs";
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in?redirect_url=/account');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return (
      <main className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Account Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">My Account</h1>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Account Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Orders Section */}
          <Link href="/orders" className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h2 className="text-xl font-semibold">Orders</h2>
            </div>
            <p className="text-gray-600">View and track your orders</p>
          </Link>

          {/* Profile Section */}
          <Link href="/account/profile" className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>
            <p className="text-gray-600">Manage your personal information</p>
          </Link>

          {/* Addresses Section */}
          <Link href="/account/addresses" className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-xl font-semibold">Addresses</h2>
            </div>
            <p className="text-gray-600">Manage your shipping addresses</p>
          </Link>

          {/* Wishlist Section */}
          <Link href="/wishlist" className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h2 className="text-xl font-semibold">Wishlist</h2>
            </div>
            <p className="text-gray-600">View your saved items</p>
          </Link>

          {/* Payment Methods Section */}
          <Link href="/account/payment-methods" className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <h2 className="text-xl font-semibold">Payment Methods</h2>
            </div>
            <p className="text-gray-600">Manage your payment options</p>
          </Link>

          {/* Settings Section */}
          <Link href="/account/settings" className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-xl font-semibold">Settings</h2>
            </div>
            <p className="text-gray-600">Manage your account settings</p>
          </Link>
        </div>
      </div>
    </main>
  );
} 