import Status from "./Status";
import { FaCircle } from "react-icons/fa";

export default function TotalRecieved() {
  return (
    <div className="shadow rounded-xl p-6 bg-white flex items-center">
      <div className="mr-6">
        <p className="text-gray-400 text-xs uppercase">Total Recieved</p>
        <p className="text-gray-800 text-4xl font-medium my-2">
          <sup className="text-gray-500 text-xl">$</sup> 84,254<span className="text-gray-500">.58</span>
        </p>
        <Status title="+10 since last month" hasBg color="green" />
      </div>
      <div className="ml-4">
        <Status title="Pending" color="blue" icon={<FaCircle size={8} />} />
        <div className="font-semibold mb-4">
          $1254<span className="text-gray-500">.50</span>
        </div>
        <Status title="In drafts" color="yellow" icon={<FaCircle size={8} />} />
        <div className="font-semibold">
          $00<span className="text-gray-500">.00</span>
        </div>
      </div>
    </div>
  );
}
