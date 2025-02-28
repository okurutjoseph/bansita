'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from "@clerk/nextjs";
import MiniCart from './MiniCart';
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50">
      {/* Top Bar */}
      <div className="hidden sm:flex justify-end items-center h-[2.5rem] pl-24 bg-[#ebebeb] font-roboto">
        {isSignedIn ? (
          <Link 
            href="/account" 
            className="flex items-center gap-1.5 border-r border-[#bbbcbc] h-full px-[1rem] text-[#53565a] hover:text-black text-[0.8rem] font-normal"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-5.34 0-8 2.68-8 4v2h16v-2c0-1.32-2.66-4-8-4z"/>
            </svg>
            <span>Hi, {user?.firstName || 'there'}</span>
          </Link>
        ) : (
          <Link 
            href="/account/login" 
            className="flex items-center gap-1.5 border-r border-[#bbbcbc] h-full px-[1rem] text-[#53565a] hover:text-black text-[0.8rem] font-normal"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-5.34 0-8 2.68-8 4v2h16v-2c0-1.32-2.66-4-8-4z"/>
            </svg>
            <span>Account</span>
          </Link>
        )}
        <Link 
          href="/accessibility" 
          className="border-r border-[#bbbcbc] h-full px-[1rem] flex items-center text-[#53565a] hover:text-black text-[0.8rem] font-normal"
        >
          Accessibility Statement
        </Link>
        <Link 
          href="/help" 
          className="border-r border-[#bbbcbc] h-full px-[1rem] flex items-center text-[#53565a] hover:text-black text-[0.8rem] font-normal"
        >
          Help
        </Link>
        <Link 
          href="/email-signup" 
          className="border-r border-[#bbbcbc] h-full px-[1rem] flex items-center text-[#53565a] hover:text-black text-[0.8rem] font-normal"
        >
          Email Sign Up
        </Link>
        <Link 
          href="/blog" 
          className="border-r border-[#bbbcbc] h-full px-[1rem] flex items-center text-[#53565a] hover:text-black text-[0.8rem] font-normal"
        >
          Blog
        </Link>
        <div className="flex items-center h-full text-[#53565a] text-[0.8rem] font-normal">
          <span className="pl-[1rem] pr-[0.8rem] text-[0.8rem]">English</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-foreground/[.08]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/bansita.svg"
            alt="BANSITA"
            width={112}
            height={36}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex justify-center items-center">
          <Link 
            href="/women" 
            className="font-montserrat text-[1rem] font-bold text-black hover:text-foreground/70 py-1.5 mx-4 transition-colors duration-150 cursor-pointer"
          >
            WOMEN
          </Link>
          <Link 
            href="/men" 
            className="font-montserrat text-[1rem] font-bold text-black hover:text-foreground/70 py-1.5 mx-4 transition-colors duration-150 cursor-pointer"
          >
            MEN
          </Link>
          <Link 
            href="/accessories" 
            className="font-montserrat text-[1rem] font-bold text-black hover:text-foreground/70 py-1.5 mx-4 transition-colors duration-150 cursor-pointer"
          >
            ACCESSORIES
          </Link>
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

          {/* Wishlist */}
          <Link href="/wishlist" className="p-2 hover:bg-foreground/[.05] rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>

          {/* Account */}
          {isSignedIn ? (
            <Link href="/account" className="p-2 hover:bg-foreground/[.05] rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-5.34 0-8 2.68-8 4v2h16v-2c0-1.32-2.66-4-8-4z"/>
              </svg>
            </Link>
          ) : (
            <Link href="/account/login" className="p-2 hover:bg-foreground/[.05] rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-5.34 0-8 2.68-8 4v2h16v-2c0-1.32-2.66-4-8-4z"/>
              </svg>
            </Link>
          )}

          {/* Cart */}
          <button 
            onClick={() => setIsMiniCartOpen(true)} 
            className="p-2 hover:bg-foreground/[.05] rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>

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

      {/* Add MiniCart component */}
      <MiniCart 
        isOpen={isMiniCartOpen} 
        onClose={() => setIsMiniCartOpen(false)} 
      />
    </header>
  );
};

export default Header;