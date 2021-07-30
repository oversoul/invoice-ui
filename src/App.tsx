import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TotalRecieved from "./components/TotalRecieved";

function App() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-sm relative w-80">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">
              <TotalRecieved />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
