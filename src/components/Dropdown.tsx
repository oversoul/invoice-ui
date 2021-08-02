import { isValidElement, useRef, useState } from "react";
import { FaCheck, FaSort } from "react-icons/fa";
import useOutside from "../hooks/useOutside";

type OptionProps = {
  value: any;
  checked?: boolean;
  onClick: Function;
  renderer?: Function;
};

const getRenderableItem = (value: any, renderer?: Function) => {
  let output = value;
  if (renderer) output = renderer(value);
  if (isValidElement(output)) {
    return output;
  }

  return output.toString();
};

const OptionRow = ({ onClick, renderer, value, checked }: OptionProps) => {
  const item = getRenderableItem(value, renderer);

  return (
    <li
      onClick={() => onClick()}
      className="flex items-center justify-between text-gray-900 cursor-default hover:bg-indigo-500 hover:text-white select-none py-2 px-3"
    >
      <span className="block font-normal truncate">{item}</span>

      {checked && <FaCheck className="mr-1" />}
    </li>
  );
};

type DropdownProps = {
  defaultValue: any;
  options: Array<any>;
  optionRenderer?: Function;
};

const Dropdown = ({ defaultValue, options, optionRenderer }: DropdownProps) => {
  const dropdownRef = useRef(null);
  const [value, setValue] = useState(defaultValue);
  const [showDropdown, setShowDropdown] = useState(false);
  useOutside(dropdownRef, () => setShowDropdown(false));

  const currentValue = getRenderableItem(value, optionRenderer);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={(_) => setShowDropdown(!showDropdown)}
        className="flex justify-between w-full bg-white border px-3 py-2.5 cursor-default sm:text-sm"
      >
        <span className="block truncate">{currentValue}</span>
        <FaSort className="h-5 w-5 text-gray-400" />
      </button>
      {showDropdown && (
        <div className="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg">
          <ul className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((element: any, idx: number) => (
              <OptionRow
                key={idx}
                value={element}
                checked={element === value}
                renderer={optionRenderer}
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
  );
};
export default Dropdown;
