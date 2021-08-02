type IProps = {
  color?: string;
  onClick?: Function;
  children?: React.ReactNode
};

const getColor = (color?: string) => {
  switch (color) {
    case "red":
      return "border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
    case "blue":
      return "border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
    default:
      return "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500";
  }
};

const ActionButton = ({ children, onClick, color }: IProps) => {
  const colorClass = getColor(color);
  return (
    <button
      type="button"
      onClick={(e) => (onClick ? onClick(e) : "")}
      className={`w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${colorClass}`}
    >
      {children}
    </button>
  );
};

ActionButton.defaultProps = {
  color: "gray",
};

export default ActionButton;
