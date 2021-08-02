import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";

const FilterBar = () => {
  return (
    <div className="flex gap-4">
      <div className="relative flex items-center w-full h-full group">
        <FaSearch className="absolute left-0 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" />
        <input
          type="text"
          className="block w-full py-2 pl-10 pr-4 leading-normal bg-white dark:bg-gray-800 text-gray-400 border"
          placeholder="Search an Invoice"
        />
      </div>
      <Dropdown defaultValue={"Show all"} options={["Show all", "By No.", "By Name"]} />
    </div>
  );
};

export default FilterBar;
