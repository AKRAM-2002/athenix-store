"use client";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaKey } from "react-icons/fa";
import Form from "next/form";
import { PackageIcon } from "@sanity/icons";

export default function Header() {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const creteClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log("Passkey created:", response);
      // Example: await clerk.createPasskey();
      alert("Passkey created successfully!");
    } catch (error) {
      console.error("Error creating passkey:", JSON.stringify(error, null, 2));
      alert("Failed to create passkey.");
    }
  };

  return (
    <header className="bg-white text-black shadow-lg relative">
      {/* Top Bar with Shipping and Customer Info */}
      <div className="bg-gray-800 py-2 text-sm text-center">
        <div className="container mx-auto flex flex-wrap justify-center space-x-6 text-gray-300">
          <span>Free EU Shipping above 100€</span>
          <span>200.000+ Customers Worldwide</span>
          <span>Worldwide Tracked Shipping</span>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="h-20 border-b border-gray-100">
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          {/* Brand Logo/Name */}
          <div className="flex items-center">
            <div className="w-28 h-28 relative">
              <Image
                src="/images/athenix-logo1.png"
                alt="Athenix Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-300 tracking-wider -ml-1"
            >
              ATHENIX
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            <Link 
              href="/clothing" 
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
            >
              <span className="relative">
                CLOTHING
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/equipment" 
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
            >
              <span className="relative">
                EQUIPMENT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/about-us" 
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
            >
              <span className="relative">
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Form 
              action="/search"
              className="flex items-center"
            >
              <input 
                name="query" 
                type="text" 
                placeholder="Search for Gym Products"
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-gray-400 transition-all duration-300"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 transition-all duration-300"
              >
                Search
              </button>
            </Form>
          </nav>

          {/* Right Side Actions Group */}
          <div className="flex items-center">
            {/* User Actions */}
            <Link 
                href="/basket" 
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 relative group"
              >
                <FaShoppingCart className="w-6 h-6" />
                <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Basket
                </span>
              </Link>
            <div className="flex items-center gap-6">
              <ClerkLoaded>
                <div className="flex items-center gap-4">
                  <SignedIn>
                    <Link 
                      href="/orders" 
                      className="text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 relative group"
                    >
                      <PackageIcon className="w-8 h-8 p-1" />
                      <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Orders
                      </span>
                    </Link>
                  </SignedIn>

                  {user ? (
                    <div className="transform hover:scale-105 transition-transform duration-200">
                      <UserButton 
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8",
                            userButtonPopoverCard: "right-0"
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <SignInButton mode="modal">
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        Sign in
                      </button>
                    </SignInButton>
                  )}
                  {user?.passkeys.length === 0 && (
                    <button 
                       title="Create a passkey"
                       onClick={creteClerkPasskey}
                       className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
                    >
                      <FaKey className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </ClerkLoaded>
              
              
            </div>

            {/* Hamburger Menu Button - Now part of the right side group */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900 transition-all duration-300 z-50 ml-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`
            fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:hidden
          `}>
            <div className="flex flex-col h-full pt-24 px-8 space-y-8">
              <Link 
                href="/clothing" 
                className="text-xl text-gray-800 hover:text-gray-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                CLOTHING
              </Link>
              <Link 
                href="/equipment" 
                className="text-xl text-gray-800 hover:text-gray-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                EQUIPMENT
              </Link>
              <Link 
                href="/about-us" 
                className="text-xl text-gray-800 hover:text-gray-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Form 
                action="/search"
                className="flex flex-col space-y-2 w-full"
              >
                <input 
                  name="query" 
                  type="text" 
                  placeholder="Search for Gym Products"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300"
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  Search
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}