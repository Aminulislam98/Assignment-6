const Navbar = () => {
  return (
    <div>
      <div className="border-b border-b-gray-100 md:shadow-xs sticky top-0 z-50 bg-white px-2">
        <div className=" bg-white max-w-7xl mx-auto flex justify-between h-12 md:h-15 items-center">
          {/* left section */}
          <div className="left-section">
            <h2 className="text-xl inline-block lg:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </h2>
          </div>
          {/* middle section */}
          <div className="middle-section">
            <div className="hidden lg:flex">
              <ul
                tabIndex="-1"
                className="flex flex-row space-x-12 text-base text-[#101727]"
              >
                <li>
                  <a className="cursor-pointer">Products</a>
                </li>
                <li>
                  <a className="cursor-pointer">Features</a>
                </li>
                <li>
                  <a className="cursor-pointer">Pricing</a>
                </li>
                <li>
                  <a className="cursor-pointer">Testimonials</a>
                </li>
                <li>
                  <a className="cursor-pointer">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          {/* right section */}
          <div className=" flex flex-row md:justify-between  justify-end  items-center gap-x-12">
            <div className=" flex flex-row gap-x-1 justify-center items-center ">
              <div className=" flex flex-row  gap-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{" "}
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                {/* login section */}

                <button
                  className="cursor-pointer flex justify-center self-center items-center  font-semibold gap-2 py-1 px-2 md:py-2 md:px-3 border rounded-md lg:rounded-3xl border-gray-200 text-sm md:text-base hover:bg-gray-100  text-black
             "
                >
                  Login
                </button>
              </div>

              <div className="flex flex-row">
                <button
                  className="flex justify-between items-center  font-semibold gap-2 py-1 px-2 md:py-2 md:px-3 border rounded-md lg:rounded-3xl border-gray-200 text-sm md:text-base hover:bg-gray-100 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white cursor-pointer
             "
                >
                  Get Started
                </button>
              </div>
              <div className="md:hidden flex">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-md dropdown-content   bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0 "
                  >
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Fixture</a>
                    </li>
                    <li>
                      <a>Teams</a>
                    </li>
                    <li>
                      <a>Schedules</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
