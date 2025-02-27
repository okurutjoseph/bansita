'use client';

import { useUser, UserButton, useAuth, useClerk } from "@clerk/nextjs";
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminAccountPage() {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const { signOut } = useClerk();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in?redirect_url=/admin/account');
    }
    // Check if user has admin role
    const userRole = user?.publicMetadata?.role as string | undefined;
    if (isLoaded && isSignedIn && userRole !== 'admin') {
      router.push('/account');
    }
  }, [isLoaded, isSignedIn, router, user]);

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
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-4xl font-bold">ADMIN DASHBOARD</h1>
        </div>

        {/* Admin Info */}
        <div className="flex items-start gap-4 mb-12">
          {user?.imageUrl ? (
            <img 
              src={user.imageUrl} 
              alt={`${user.firstName}'s profile`}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
            {user?.firstName?.[0] || 'A'}
          </div>
          )}
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{user?.firstName} {user?.lastName}</h2>
            <div className="flex items-center gap-4">
            <p className="text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
              <button onClick={handleSignOut} className="text-sm underline hover:text-gray-600">
                Log out
              </button>
            </div>
            <p className="text-sm text-blue-600">Administrator</p>
          </div>
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-1 gap-8 max-w-2xl">
          {/* Orders Management */}
          <div className="border border-gray-200 p-8 bg-[rgb(249,250,251)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">ORDERS</h2>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-center">
                VIEW ORDERS
              </button>
            </div>
          </div>

          {/* Product Management */}
          <div className="border border-gray-200 p-8 bg-[rgb(249,250,251)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">PRODUCT MANAGEMENT</h2>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-center">
                PRODUCTS
              </button>
              <Link href="/admin/products/new" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-center">
                ADD NEW PRODUCT
              </Link>
              <Link href="/admin/categories" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-center">
                MANAGE CATEGORIES
              </Link>
            </div>
          </div>

          {/* Customer Management */}
          <div className="border border-gray-200 p-8 bg-[rgb(249,250,251)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">CUSTOMER MANAGEMENT</h2>
              <Link href="/admin/customers" className="text-sm underline">
                View all customers
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Total Customers</h3>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Active Today</h3>
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>
          </div>

          {/* Settings & Configuration */}
          <div className="border border-gray-200 p-8 bg-[rgb(249,250,251)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">SETTINGS & CONFIGURATION</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/admin/settings/store" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-center">
                STORE SETTINGS
              </Link>
              <Link href="/admin/settings/shipping" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-center">
                SHIPPING RULES
              </Link>
              <Link href="/admin/settings/payment" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-center">
                PAYMENT METHODS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 