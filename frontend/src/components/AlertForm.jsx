import { useState } from "react";
import api from "../services/api";

const AlertForm = ({ onAlertCreated }) => {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    visaType: "Tourist",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/alerts", formData);
      setFormData({ country: "", city: "", visaType: "Tourist" });
      onAlertCreated();
    } catch (error) {
      alert(error.response?.data?.message || "Error creating alert");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Create Visa Alert</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Tourist</option>
          <option>Business</option>
          <option>Student</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Alert
        </button>
      </form>
    </div>
  );
};

export default AlertForm;
