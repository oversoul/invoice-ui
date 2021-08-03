import { useState } from "react";
import Status from "../Status";
import FilterBar from "./FilterBar";
import FilterableTable from "./FilterableTable";
import { FaCheck, FaCircle, FaTimes } from "react-icons/fa";

type InvoiceProp = { value: string };
const InvoiceStatus = (props: InvoiceProp) => {
  let color = "gray";
  let icon = <FaCircle size={8} />;
  switch (props.value) {
    case "Pending":
      color = "blue";
      break;
    case "Draft":
      color = "yellow";
      icon = <FaTimes size={8} />;
      break;
    case "Paid":
      color = "green";
      icon = <FaCheck size={8} />;
      break;
  }
  return <Status hasBg color={color} title={props.value} icon={icon} />;
};

const InvoiceAmount = ({ value }: { value: number }) => {
  var price = Math.floor(value);
  var fraction = value - price;
  return (
    <div className="font-semibold text-gray">
      $ {price}
      <span className="text-gray-500">
        .{fraction.toFixed(2).replace("0.", "")}
      </span>
    </div>
  );
};

const DATA = [
  ["#BCS101", "Jun 31, 2020", "Burton Brock", 901.75, "Paid"],
  ["#BCS102", "Feb 10, 2020", "Mona Rios", 2808.9, "Pending"],
  ["#BCS103", "Mar 28, 2020", "Wanda Dominguez", 1254.32, "Draft"],
  ["#BCS104", "Dec 17, 1987", "John Conner", 2839.61, "Pending"],
];

const filterData = (data: any[], keyword: string) => {
  return data.filter((row) =>
    JSON.stringify(row).toLowerCase().includes(keyword)
  );
};

const InvoiceTable = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <div className="mb-5">
        <FilterBar onSearch={(keyword: string) => setKeyword(keyword)} />
      </div>
      <div>
        <FilterableTable
          rows={filterData(DATA, keyword)}
          cols={["No.", "Date", "Client", "Amount", "Status"]}
          renderer={{
            0: (value: string) => (
              <span className="font-semibold">{value}</span>
            ),
            3: (value: number) => <InvoiceAmount value={value} />,
            4: (value: string) => <InvoiceStatus value={value} />,
          }}
        />
      </div>
    </>
  );
};
export default InvoiceTable;
