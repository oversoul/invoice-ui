import { FaTimes } from "react-icons/fa";

type IProps = {
  open?: boolean;
  title: string;
  onChange: Function;
  children: JSX.Element[];
};

const SideDialog = ({ open, onChange, title, children }: IProps) => {
  if (!open) return <div />;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="slide-over-title"
      className="z-10 fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* 
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
*/}
        <div
          aria-hidden="true"
          onClick={() => onChange(false)}
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          {/*
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
*/}
          <div className="relative w-screen max-w-md">
            {/*
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
*/}

            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="flex justify-between px-4 sm:px-6">
                <h2 className="text-md font-medium text-gray-900">{title}</h2>
                <button
                  onClick={(_) => onChange(false)}
                  className="text-gray-300 hover:text-gray-500"
                >
                  <span className="sr-only">Close panel</span>
                  <FaTimes />
                </button>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDialog;
