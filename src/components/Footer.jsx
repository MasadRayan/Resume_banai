import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-linear-to-r from-white via-green-300/60 to-white text-black py-12 px-4 sm:px-6 lg:px-8 mt-28">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
              <a href="/">
                <img src="/logo.svg" alt="resume builder Logo" />
              </a>
              <p className="text-sm text-black/60 mt-6 max-w-sm leading-relaxed">
                Resume Builder is a free online resume builder that helps you
                create a professional resume in minutes. 
              </p>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-black font-medium">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-black font-medium">Social Links</h3>
              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  Youtube
                </a>
                <a
                  href="#"
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  Linkedin
                </a>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-black font-medium">
                Subscribe for news
              </h3>
              <div className="flex items-center border gap-2 border-black/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                <input
                  type="email"
                  placeholder="Enter your email.."
                  className="w-full h-full pl-6 outline-none text-sm bg-transparent text-black placeholder-black/60 placeholder:text-xs"
                  required
                />
                <button
                  type="submit"
                  className="bg-linear-to-b from-green-600 to-green-500 active:scale-95 transition w-56 h-10 rounded-full text-sm text-black cursor-pointer mr-1.5"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-black/60">© 2026 Masad Rayan</p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-black/60 hover:text-black transition-colors"
              >
                Terms & Conditions
              </a>
              <div className="w-px h-4 bg-black"></div>
              <a
                href="#"
                className="text-xs text-black/60 hover:text-black transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
