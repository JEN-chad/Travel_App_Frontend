export const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-4 pb-4 pl-5 pr-5  mb-4 border-b border-b-gray-400 shadow-lg">
        <div>
          {/* Title */}
          <h1 className="text-[var(--color-primary)] font-bold text-3xl cursor-pointer">
            TravelO
          </h1>
        </div>
        <div className="flex items-center justify-between bg-white shadow-md rounded-full px-4 py-2 w-fit">
          {/* Anywhere */}
          <div className="px-3">
            <span className="text-gray-700 font-medium cursor-pointer">
              Anywhere
            </span>
          </div>

          {/* Divider */}
          <div className="h-6 border-l border-gray-300"></div>

          {/* Any week */}
          <div className="px-3">
            <span className="text-gray-700 font-medium cursor-pointer">
              Any week
            </span>
          </div>

          {/* Divider */}
          <div className="h-6 border-l border-gray-300"></div>

          {/* Add Guests */}
          <div className="px-3">
            <span className="text-gray-500 cursor-pointer">Add Guests</span>
          </div>

          {/* Search Button */}
          <button className="bg-[var(--color-primary)] text-white cursor-pointer p-2 rounded-full ml-2 flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            {/* User Name */}
            <h2 className="text-gray-600 text-[18px] font-medium">
              Hi 😎, Jenish
            </h2>
          </div>
          <div className=" flex items-center gap-2 p-1 w-fit h-10 rounded full">
            <span className="material-symbols-outlined  cursor-pointer">
              menu
            </span>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer">
              <span className="material-symbols-outlined text-[28px]">
                person
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
