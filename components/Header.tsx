'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-foreground/[.08]">
      {/* Top Bar */}
      <div className="hidden sm:flex justify-end items-center px-4 py-1 text-xs space-x-4 bg-foreground/[.02]">
        <Link href="/account" className="hover:underline">Account</Link>
        <Link href="/accessibility" className="hover:underline">Accessibility Statement</Link>
        <Link href="/help" className="hover:underline">Help</Link>
        <Link href="/email-signup" className="hover:underline">Email Sign Up</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <div className="flex items-center space-x-2">
          <span>US</span>
          <span>English</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-2xl font-bold font-montserrat">BANSITA</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/women" className="font-montserrat text-sm hover:text-foreground/70">WOMEN</Link>
          <Link href="/men" className="font-montserrat text-sm hover:text-foreground/70">MEN</Link>
          <Link href="/accessories" className="font-montserrat text-sm hover:text-foreground/70">ACCESSORIES</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-foreground/[.05] rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Account */}
          <Link href="/account" className="p-2 hover:bg-foreground/[.05] rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="p-2 hover:bg-foreground/[.05] rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-foreground/[.05] rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t border-foreground/[.08] p-4">
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-foreground/[.08] rounded-full focus:outline-none focus:border-foreground/30"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;