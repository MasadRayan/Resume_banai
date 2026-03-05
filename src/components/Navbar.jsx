import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ CHANGED: lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Templates", link: "#templates" },
    { name: "Pricing", link: "#pricing" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <>
      {/* ✅ CHANGED: was `div` with `sticky` → now a semantic `header` with `fixed` + full width */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm shadow-green-100"
            : "bg-transparent"
        }`}
      >
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          {/* Logo */}
          <a href="/">
            <img src="/logo.svg" alt="Logo" className="h-11 w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-green-600 transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-green-700 hover:bg-green-50 transition-all rounded-full"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 text-sm font-semibold bg-green-500 hover:bg-green-600 active:scale-95 transition-all rounded-full text-white shadow-md shadow-green-200"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-lg hover:bg-green-50 active:scale-90 transition text-slate-700"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M3 5h16M3 12h16M3 19h16" />
            </svg>
          </button>
        </nav>

        {/* ✅ CHANGED: was `sticky` → now `fixed` so overlay covers full viewport */}
        <div
          className={`fixed inset-0 z-100 md:hidden transition-all duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-in Panel */}
          {/* ✅ CHANGED: added `fixed` to panel so it stays in place while scrolling */}
          <div
            className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <a href="/" onClick={() => setMenuOpen(false)}>
                <img src="/logo.svg" alt="Logo" className="h-9 w-auto" />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full hover:bg-slate-100 active:scale-90 transition text-slate-500"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col px-4 py-6 gap-1 flex-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.link}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-slate-700 hover:text-green-600 hover:bg-green-50 transition-all duration-150"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Panel CTAs */}
            <div className="px-4 pb-8 flex flex-col gap-3 border-t border-slate-100 pt-5">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 active:scale-95 transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold bg-green-500 hover:bg-green-600 active:scale-95 transition-all rounded-xl text-white shadow-md shadow-green-200"
              >
                Get Started Free →
              </Link>
              <p className="text-center text-xs text-slate-400 mt-1">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ ADDED: spacer so page content doesn't hide under the fixed navbar */}
      <div className="h-18" />
    </>
  );
};

export default Navbar;