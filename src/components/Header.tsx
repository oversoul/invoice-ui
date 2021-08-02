import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line
function Header2() {
  return (
    <header className="w-full shadow-sm bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
            <div className="relative flex items-center w-full lg:w-64 h-full group">
              <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                <FaSearch />
              </div>
              <FaSearch className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" />
              <input
                type="text"
                className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <a href="/" className="block relative">
              <img
                alt="profil"
                src="https://i.pravatar.cc/100"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header className="w-full shadow-sm bg-white dark:bg-gray-700 items-center h-16 rounded-2xl">
      <div className="flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative items-center left-0 flex w-3/4 h-auto h-full">
            <div className="pl-2 font-semibold text-gray-700">Payments</div>
          </div>
          <div className="p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <a href="/" className="block">
              <img
                alt="profil"
                src="https://i.pravatar.cc/100"
                className="mx-auto object-cover rounded-full h-10 w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
