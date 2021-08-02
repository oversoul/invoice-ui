const InvoiceFormActions = () => {
  return (
    <div className="mt-4 flex justify-between items-center border-t pt-4">
      <button className="text-blue-600 uppercase text-sm font-medium">
        Preview
      </button>
      <div>
        <button
          type="button"
          className="py-2 mr-2 px-4 bg-white border hover:border-blue-600 hover:text-blue-600 text-center text-sm text-gray-700 uppercase rounded"
        >
          Save as draft
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-center text-sm text-white uppercase rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default InvoiceFormActions;
