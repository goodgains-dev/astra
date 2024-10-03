'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react'; // Import Menu and X icons

const Navbar = () => {
  const user = null; // Replace with your own authentication logic if needed

  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  const [isVisible, setIsVisible] = useState(true); // State for navbar visibility

  // State to track scroll position
  let lastScrollY = 0;

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to handle navbar visibility on scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // If scrolling down and scrolled past a threshold (100px), hide navbar
      setIsVisible(false);
    } else {
      // If scrolling up or near top of the page, show navbar
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  // Add event listener for scroll on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`px-4 h-14 sticky top-0 inset-x-0 w-full bg-white backdrop-blur-lg border-b border-gray-200 shadow-sm z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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

        {/* Hamburger Menu Icon for Mobile - visible for screens smaller than `lg` */}
        <button
          className="block lg:hidden text-black"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Centered navigation links - hidden on mobile, shown on larger screens */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
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
                href="https://goodgainsgram-landingpage.vercel.app/"
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

        {/* Right side buttons - shown on larger screens */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="text-black">Welcome, User</div>
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

        {/* Mobile Menu Links */}
        {mobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link
                  href="/"
                  className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://66f264ec74c2f6a84f8517a8--funny-vacherin-767340.netlify.app/"
                  className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="https://goodgains.xyz"
                  className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  Gram
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="text-black hover:text-gray-400 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  Workflow
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {/* Dropdown menu in mobile */}
                {dropdownOpen && (
                  <ul className="mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                    {[
                      { title: 'Creation', href: '/index.html' },
                      { title: 'Organization', href: '/index2.html' },
                      { title: 'Design', href: '/index3.html' },
                      { title: 'Analysis', href: '/index4.html' },
                      { title: 'Marketing', href: '/index5.html' },
                    ].map((item, index) => (
                      <li key={index} className="hover:bg-gray-100">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                          onClick={toggleMobileMenu}
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
                  onClick={toggleMobileMenu}
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
