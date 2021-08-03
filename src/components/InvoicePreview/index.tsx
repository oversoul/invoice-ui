import SmallText from "./SmallText";
import CenterDialog from "../CenterDialog";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceHeader from "./InvoiceHeader";
import { FaFileInvoiceDollar } from "react-icons/fa";

const LineItemsHeader = () => {
  return (
    <div className="flex text-gray-500 text-xs font-medium">
      <div className="w-1/2">Item</div>
      <div className="w-1/2 flex text-right">
        <div className="w-1/3">Qty</div>
        <div className="w-1/3">Price</div>
        <div className="w-1/3">Total</div>
      </div>
    </div>
  );
};

const LineItemValue = ({ item }: { item: any }) => {
  return (
    <div className="flex text-sm">
      <div className="w-1/2">{item.name}</div>
      <div className="w-1/2 flex text-right">
        <div className="w-1/3">{item.quantity}</div>
        <div className="w-1/3">${item.price}</div>
        <div className="w-1/3">${item.price * item.quantity}</div>
      </div>
    </div>
  );
};

const Note = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-blue-50 p-3">
      <SmallText>{children}</SmallText>
    </div>
  );
};

const items = [
  { name: "Legal Advising", quantity: 2, price: 500 },
  { name: "Expert Consulting", quantity: 1, price: 400 },
];

type IProps = {
  open: boolean;
  onClose: Function;
};

const InvoicePreview = ({ open, onClose }: IProps) => {
  return (
    <CenterDialog
      open={open}
      onClose={onClose}
      header={<InvoiceHeader />}
      footer={<InvoiceFooter onClose={onClose} />}
    >
      <div className="flex w-full">
        <div className="w-1/3">
          <SmallText>Issued on</SmallText>
          <div>Oct 25, 2020</div>
        </div>
        <div className="w-1/3">
          <SmallText>Due on</SmallText>
          <div>Nov 04, 2020</div>
        </div>
      </div>
      <div className="mt-4">
        <SmallText>Invoice for</SmallText>
        <div>Alex Parkinson</div>
        <SmallText>3875 Hickory St. Salt Lake City</SmallText>
        <SmallText>Utah, United States 84104</SmallText>
      </div>
      <div className="my-10">
        <div className="border rounded space-y-3 p-3">
          <LineItemsHeader />

          {items.map((item, key: number) => (
            <LineItemValue key={key} item={item} />
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="w-3/5 pt-1.5">
          <SmallText>
            Here we can add additional notes for the client to get a better
            understanding of this invoice
          </SmallText>
        </div>
        <div className="w-1/5 text-right pt-1.5">
          <SmallText>Total Amount</SmallText>
        </div>
        <div className="w-1/5 text-right font-medium text-xl">$1400</div>
      </div>
      <div className="my-10">
        <Note>
          <div className="flex items-center">
            <FaFileInvoiceDollar className="mr-2" color={"blue"} size={20} />
            <div>
              Dont worry, client will get a hosted payment field here to make
              payment with any credit card, debit card or bank transfer.
            </div>
          </div>
        </Note>
      </div>
    </CenterDialog>
  );
};

InvoicePreview.defaultProps = {
  open: false,
  onClose: () => {},
};

export default InvoicePreview;
