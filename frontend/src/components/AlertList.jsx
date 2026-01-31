import { useEffect, useState } from "react";
import api from "../services/api";

const AlertList = ({ refresh }) => {
  const [alerts, setAlerts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 5;

  const fetchAlerts = async () => {
    try {
      const res = await api.get(
        `/alerts?page=${page}&limit=${limit}`
      );

      setAlerts(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
    } catch (error) {
      alert("Failed to fetch alerts");
    }
  };

  const updateStatus = async (id, currentStatus) => {
    const nextStatus =
      currentStatus === "Active"
        ? "Booked"
        : currentStatus === "Booked"
        ? "Expired"
        : "Active";

    try {
      await api.put(`/alerts/${id}`, { status: nextStatus });
      fetchAlerts();
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const deleteAlert = async (id) => {
    if (!window.confirm("Delete this alert?")) return;

    try {
      await api.delete(`/alerts/${id}`);
      fetchAlerts();
    } catch (error) {
      alert("Failed to delete alert");
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, [page, refresh]);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Visa Alerts</h2>

      {alerts.length === 0 ? (
        <p className="text-gray-500">No alerts found</p>
      ) : (
        <>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Country</th>
                <th className="border p-2">City</th>
                <th className="border p-2">Visa Type</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {alerts.map((alert) => (
                <tr key={alert._id}>
                  <td className="border p-2">{alert.country}</td>
                  <td className="border p-2">{alert.city}</td>
                  <td className="border p-2">{alert.visaType}</td>
                  <td className="border p-2 font-medium">
                    {alert.status}
                  </td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() =>
                        updateStatus(alert._id, alert.status)
                      }
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteAlert(alert._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AlertList;
