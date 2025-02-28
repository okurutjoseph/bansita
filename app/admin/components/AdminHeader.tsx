'use client';

import Link from 'next/link';
import { useUser } from "@clerk/nextjs";

const AdminHeader = () => {
  const { user } = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-[#1d2327] z-50">
      <div className="max-w-screen-2xl mx-auto px-4 h-8 flex justify-between items-center font-roboto text-[13px] font-normal text-[#C3C4B8]">
        {/* Home Link with Icon */}
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
          <span>Bansita</span>
        </Link>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <span>Hi, {user?.firstName || 'Admin'}</span>
          {user?.imageUrl && (
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src={user.imageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader; 