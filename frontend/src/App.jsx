import { useState } from "react";
import AlertForm from "./components/AlertForm";
import AlertList from "./components/AlertList";

function App() {
  const [refresh, setRefresh] = useState(0);

  const reloadAlerts = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Visa Slot Alerts
        </h1>

        <AlertForm onAlertCreated={reloadAlerts} />
        <AlertList refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
