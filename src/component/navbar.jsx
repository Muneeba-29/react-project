import React from "react";

function Navbar(){
    return(
        <>
      <nav className="border-b border-white z-10 mb-4">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#A47DAB] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>

              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFf2xrZSHczri-vQKfgqMFBRouE043LD5qQ&s" alt="" width="60px" className="rounded-lg"/>
                </div>
                <div className="hidden sm:flex items-center ml-15 space-x-4">
                  <a href="/" className="rounded-md px-6 py-2 text-md font-semibold text-white hover:bg-[#4B006E] hover:text-white" aria-current="page">HOME</a>
                  <a href="/about" className="rounded-md px-6 py-2 text-md font-semibold text-white hover:bg-[#4B006E] hover:text-white">ABOUT</a>
                  <a href="/contact" className="rounded-md px-6 py-2 text-md font-semibold text-white hover:bg-[#4B006E] hover:text-white">CONTACT</a>
                </div>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button type="button" className="text-white bg-[#4B006E] px-4 py-1 rounded-md text-lg font-semibold cursor-pointer">
                  Login
                </button>
              </div>
            </div>
          </div>

          <div className="sm:hidden" id="mobile-menu ">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#A47DAB] hover:text-white" aria-current="page">HOME</a>
              <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#A47DAB] hover:text-white">ABOUT</a>
              <a href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#A47DAB] hover:text-white">CONTACT</a>
            </div>
          </div>
      </nav>
    </>
    )
}

export default Navbar;