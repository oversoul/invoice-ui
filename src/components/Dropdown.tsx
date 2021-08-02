import { useRef, useState } from "react";
import { FaCheck, FaSort } from "react-icons/fa";
import useOutside from "../hooks/useOutside";

type OptionProps = {
  value: string;
  checked?: boolean;
  onClick: Function;
};

const OptionRow = (props: OptionProps) => {
  return (
    <li
      role="option"
      onClick={() => props.onClick()}
      className="flex items-center justify-between text-gray-900 cursor-default hover:bg-indigo-500 hover:text-white select-none py-2 px-3"
    >
      <span className="ml-3 block font-normal truncate">{props.value}</span>

      {props.checked && <FaCheck className="mr-1" />}
    </li>
  );
};

type DropdownProps = {
  defaultValue: any;
  options: Array<any>;
};

const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef(null);
  const [value, setValue] = useState(props.defaultValue);
  const [showDropdown, setShowDropdown] = useState(false);
  useOutside(dropdownRef, () => setShowDropdown(false));
  return (
    <div className="w-64" ref={dropdownRef}>
      <div className="relative">
        <button
          type="button"
          onClick={(_) => setShowDropdown(!showDropdown)}
          className="flex justify-between w-full bg-white border px-3 py-2.5 cursor-default sm:text-sm"
        >
          <span className="ml-3 block truncate">{value}</span>
          <FaSort className="h-5 w-5 text-gray-400" />
        </button>
        {showDropdown && (
          <div className="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg">
            <ul
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {props.options.map((element: any) => (
                <OptionRow
                  value={element}
                  checked={element === value}
                  onClick={() => {
                    setValue(element);
                    setShowDropdown(false);
                  }}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
