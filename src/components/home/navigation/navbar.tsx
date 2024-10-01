'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown icon

const Navbar = () => {
  const user = null; // Replace with your own authentication logic if needed

  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-transparent backdrop-blur-lg border-b border-gray-200 shadow-sm z-50">
      <div className="relative flex items-center justify-between h-full w-full px-4">
        {/* Logo container positioned to the left */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/NavLogo.png"
              alt="GoodGains Logo"
              className="w-8 h-8 object-cover"
            />
            <span className="text-xl font-bold text-black tracking-tight">GoodGains</span>
          </Link>
        </div>

        {/* Centered navigation links */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <Link
                href="/"
                className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://66f264ec74c2f6a84f8517a8--funny-vacherin-767340.netlify.app/"
                className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="https://goodgains.xyz"
                className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200"
              >
                Gram
              </Link>
            </li>

            {/* Workflow with Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                Workflow
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  {[
                    { title: 'Creation', href: '/index.html' },  // Unique link
                    { title: 'Organization', href: '/index2.html' },  // Unique link
                    { title: 'Design', href: '/index3.html' },  // Unique link
                    { title: 'Analysis', href: '/index4.html' },  // Unique link
                    { title: 'Marketing', href: '/index5.html' },  // Unique link
                  ].map((item, index) => (
                    <li key={index} className="hover:bg-gray-100">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="https://nextjs-tailwindcss-blog-template-ivory.vercel.app/"
                className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </nav>

        {/* Placeholder for user actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="text-white">Welcome, User</div>
          ) : (
            <div className="flex items-center gap-4">
              {/* Sign In Button */}
              <Link href="/signin">
                <button className="text-sm font-medium text-black hover:text-gray-400 px-4 py-1 border border-gray-300 rounded-lg transition-colors duration-200">
                  Sign In
                </button>
              </Link>
              {/* Get Started Button */}
              <Link href="/get-started">
                <button className="text-sm font-medium text-black hover:text-gray-400 px-4 py-1 border border-gray-300 rounded-lg transition-colors duration-200">
                  Get Started
                </button>
              </Link>
              {/* Contact Sales Button */}
              <Link href="/contact-sales">
                <button className="text-sm font-medium text-black hover:text-gray-400 px-4 py-1 border border-gray-300 rounded-lg transition-colors duration-200">
                  Contact Sales
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
