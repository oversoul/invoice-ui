const InvoiceHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            <span className="text-gray-500">#</span>AL2545
          </h3>
          <small className="uppercase text-gray-500">Legal Consulting</small>
        </div>
        <div className="flex flex-col items-end text-right">
          <img alt="logo" src="https://i.pravatar.cc/60" />
        </div>
      </div>
      <div className="mt-2 text-gray-500 text-xs text-right">
        <div>340 S LEMON AVE #3696</div>
        <div>Walnut, California</div>
        <div>United States 91789</div>
      </div>
    </>
  );
};

export default InvoiceHeader;
