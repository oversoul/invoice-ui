import ActionsHeader from "./components/ActionsHeader";
import FilterableTable from "./components/FilterableTable";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TotalRecieved from "./components/TotalRecieved";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-sm relative w-80">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row">
              <TotalRecieved />
            </div>
            <div className="my-5">
              <ActionsHeader
                title={"Invoices"}
                subtitle={"List of all your recent transactions."}
              >
                <span className="sm:ml-3">
                  <button
                    type="button"
                    className="uppercase inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    + New Invoice
                  </button>
                </span>
              </ActionsHeader>
            </div>
            <div className="mb-5">
              <FilterBar />
            </div>
            <div>
              <FilterableTable
                cols={["No.", "Date", "Client", "Amount", "Status"]}
                rows={[
                  [
                    "#BCS101",
                    "Jun 31, 2020",
                    "Alexander Parkinson",
                    1254.5,
                    "Pending",
                  ],
                ]}
                renderer={{
                  0: (value: string) => (
                    <div className="font-semibold">{value}</div>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
