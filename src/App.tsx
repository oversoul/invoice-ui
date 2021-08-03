import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TotalRecieved from "./components/TotalRecieved";
import ActionsHeader from "./components/ActionsHeader";
import InvoiceTable from "./components/InvoiceTable";
import SideDialog from "./components/SideDialog";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceFormActions from "./components/InvoiceFormActions";
import InvoicePreview from "./components/InvoicePreview";
import ActionButton from "./components/ActionButton";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-sm relative w-80">
          <Sidebar />
        </div>
        <SideDialog
          open={isOpen}
          title="Create new invoice"
          onClose={() => setIsOpen(false)}
        >
          <InvoiceForm />
          <InvoiceFormActions onPreview={() => setIsPopupOpen(true)} />
        </SideDialog>

        <InvoicePreview
          open={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />

        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header title="Payments" />
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row">
              <TotalRecieved />
            </div>
            <div className="my-5">
              <ActionsHeader
                title={"Invoices"}
                subtitle={"List of all your recent transactions."}
              >
                <div className="mr-2">
                  <ActionButton color="blue" onClick={() => setIsOpen(true)}>
                    + New Invoice
                  </ActionButton>
                </div>
              </ActionsHeader>
            </div>

            <InvoiceTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
