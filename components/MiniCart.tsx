'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const MiniCart = ({ isOpen, onClose }: MiniCartProps) => {
  const [activeView, setActiveView] = useState<'cart' | 'wishlist'>('cart');

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 transition-opacity z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Mini Cart */}
      <div 
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">
            {activeView === 'cart' ? 'YOUR BAG' : 'SAVE TO WISHLIST'}
          </h2>
          <div className="flex items-center gap-2">
            {/* Toggle Buttons */}
            <button 
              onClick={() => setActiveView('cart')}
              className={`p-2 rounded-full transition-colors ${
                activeView === 'cart' 
                  ? 'bg-black text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V5c0-1.7 1.3-3 3-3s3 1.3 3 3v2h4l2 15H4L6 7h2zm2-2c0-.6.4-1 1-1s1 .4 1 1v2h-2V5z"/>
              </svg>
            </button>
            <button 
              onClick={() => setActiveView('wishlist')}
              className={`p-2 rounded-full transition-colors ${
                activeView === 'wishlist' 
                  ? 'bg-black text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeView === 'cart' ? (
          /* Cart Empty State */
          <div className="flex flex-col items-center justify-center h-[calc(100%-200px)] p-4">
            <div className="w-32 h-32 mb-6 flex items-center justify-center">
              <Image
                src="/images/empty-bag.svg"
                alt="Empty shopping bag"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">YOUR BAG IS EMPTY</h3>
            <p className="text-gray-500 mb-8">There are no products in your bag</p>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Link 
                href="/men"
                className="w-full bg-black text-white py-3 px-6 text-center font-semibold hover:bg-gray-900 transition-colors"
              >
                SHOP MENS
              </Link>
              <Link 
                href="/women"
                className="w-full bg-black text-white py-3 px-6 text-center font-semibold hover:bg-gray-900 transition-colors"
              >
                SHOP WOMENS
              </Link>
            </div>
          </div>
        ) : (
          /* Wishlist Empty State */
          <div className="flex flex-col items-center justify-center h-[calc(100%-200px)] p-4">
            <div className="w-32 h-32 mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">SAVE TO WISHLIST</h3>
            <p className="text-gray-500 mb-4 text-center">
              Ever wish you could save all your fave fits & accessories in one place to come back to later? Almost like a 🐝 wishlist 🐝.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Link 
                href="/sign-up"
                className="w-full bg-black text-white py-3 px-6 text-center font-semibold hover:bg-gray-900 transition-colors"
              >
                CREATE ACCOUNT
              </Link>
              <Link 
                href="/sign-in"
                className="w-full bg-gray-600 text-white py-3 px-6 text-center font-semibold hover:bg-gray-700 transition-colors"
              >
                LOG IN
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MiniCart; 