import { FaTimes } from "react-icons/fa";

type IProps = {
  open: boolean;
  title: string;
  onClose: Function;
  children: React.ReactNode;
};

const SideDialog = ({ open, onClose, title, children }: IProps) => {
  if (!open) return <div />;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="slide-over-title"
      className="z-10 fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          aria-hidden="true"
          onClick={() => onClose()}
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>

        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div className="relative w-screen max-w-xl">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="flex justify-between px-4 sm:px-6">
                <h2 className="text-md font-medium text-gray-900">{title}</h2>
                <button
                  onClick={(_) => onClose()}
                  className="text-gray-300 hover:text-gray-500"
                >
                  <span className="sr-only">Close panel</span>
                  <FaTimes />
                </button>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6 flex flex-col">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SideDialog.defaultProps = {
  open: false,
  onClose: () => {},
};

export default SideDialog;
