'use client';

import { useUser, UserButton, useAuth, useClerk } from "@clerk/nextjs";
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const { signOut } = useClerk();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in?redirect_url=/account');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

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
          <h1 className="text-4xl font-bold">YOUR BANSITA ACCOUNT</h1>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
            {user?.firstName?.[0] || 'U'}
          </div>
          <div>
            <h2 className="text-xl font-bold">{user?.firstName} {user?.lastName}</h2>
            <p className="text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
            {user?.publicMetadata?.role === 'admin' && (
              <Link href="/admin/account" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Admin Dashboard →
              </Link>
            )}
          </div>
          <button onClick={handleSignOut} className="ml-4 text-sm underline hover:text-gray-600">
            Log out
          </button>
        </div>

        {/* Account Sections */}
        <div className="grid grid-cols-1 gap-8">
          {/* Orders Section */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">YOUR ORDERS</h2>
              <Link href="/orders" className="text-sm underline">
                View all orders
              </Link>
            </div>
            <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg">
              <div className="text-center">
                <p className="text-lg font-medium mb-2">NO ORDERS</p>
                <p className="text-gray-600">You've made no orders</p>
              </div>
            </div>
          </div>

          {/* Address Book Section */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">ADDRESS BOOK</h2>
            </div>
            <Link href="/account/addresses" className="block">
              <div className="text-sm underline mb-2">View address book(0)</div>
            </Link>
          </div>

          {/* Returns Section */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">RETURNS</h2>
            </div>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium w-full md:w-auto">
              RETURN AN ITEM
            </button>
          </div>

          {/* Refer a Friend Section */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">REFER A FRIEND</h2>
            </div>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium w-full md:w-auto">
              VISIT YOUR DASHBOARD
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 