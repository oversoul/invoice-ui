type IProps = {
  header: JSX.Element;
  footer: JSX.Element;
  children?: JSX.Element[];
};

const CenterDialog = ({ footer, header, children }: IProps) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <span
          aria-hidden="true"
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-4">
            {header}
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <div className="mt-2">{children}</div>
              </div>
            </div>
          </div>

          {footer}
        </div>
      </div>
    </div>
  );
};

export default CenterDialog;
