type IProps = {
  label: string;
  onChange?: Function;
};

const style = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E")`,
};

const Checkbox = ({ label, onChange }: IProps) => {
  return (
    <label className="flex items-center space-x-3 mb-3">
      <input
        type="checkbox"
        onChange={(e) => (onChange ? onChange(e) : "")}
        className="appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
        style={style}
      />
      <span className="text-gray-700 dark:text-white font-normal text-sm">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
