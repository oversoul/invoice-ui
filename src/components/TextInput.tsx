type IProps = {
  placeholder?: string;
  type: string;
  value?: any;
  setValue?: Function;
};

const allowedTypes = ["text", "number"];

const TextInput = ({ placeholder, type, value, setValue }: IProps) => {
  if (!allowedTypes.includes(type)) {
    console.error(`Type ${type} not allowed.`);
    return <span />;
  }

  const onChange = (e: any) => {
    if (!setValue) return;
    let value = e.target.value;
    if (type === 'number') {
      value = Number(value);
    }

    setValue(value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="appearance-none border border-gray-300 w-full py-2 px-2 rounded bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm"
    />
  );
};

TextInput.defaultProps = { type: "text" };

export default TextInput;
