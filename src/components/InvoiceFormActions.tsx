import ActionButton from "./ActionButton";

type IProps = {
  onPreview: Function;
};


const InvoiceFormActions = ({ onPreview }: IProps) => {
  return (
    <div className="mt-4 flex justify-between items-center border-t pt-4">
      <button className="text-blue-600 uppercase text-sm font-medium" onClick={(_) => onPreview()}>
        Preview
      </button>
      <div>
        <ActionButton>Save as draft</ActionButton>
        <ActionButton color="blue">Send</ActionButton>
      </div>
    </div>
  );
};

InvoiceFormActions.defaultProps = {
  onPreview: () => {}
};

export default InvoiceFormActions;
