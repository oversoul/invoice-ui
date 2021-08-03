import SmallText from "./SmallText";
import ActionButton from "../ActionButton";
import { FaDownload } from "react-icons/fa";

const InvoiceFooter = ({ onClose }: { onClose: Function }) => {
  return (
    <div className="border-t p-5 flex justify-between">
      <div>
        <button className="mb-2 uppercase text-xs font-medium text-blue-800 flex justify-center items-center">
          <FaDownload className="mr-2" /> Download Invoice
        </button>
        <SmallText>
          You can update your logo and brand color in{" "}
          <a href="/" className="text-blue-800">
            payment settings
          </a>
        </SmallText>
      </div>
      <ActionButton onClick={() => onClose()} color="gray">
        Close
      </ActionButton>
    </div>
  );
};

InvoiceFooter.defaultProps = {
  onClose: () => {},
};

export default InvoiceFooter;
