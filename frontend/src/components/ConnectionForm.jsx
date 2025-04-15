import React, { useState } from "react";
import axios from "axios";

const ConnectionForm = ({ setColumns, setPreviewData, setStatus }) => {
  const [formData, setFormData] = useState({
    host: "",
    port: "",
    database: "",
    user: "",
    jwtToken: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConnect = async () => {
    setStatus("Connecting...");
    try {
      const response = await axios.post("/api/connect", formData); // Send to backend to handle the connection
      setColumns(response.data.columns); // Example: update columns
      setPreviewData(response.data.preview); // Example: fetch preview data (first 100 rows)
      setStatus("Connected! Ready to load columns and ingest data.");
    } catch (error) {
      setStatus("Error connecting to ClickHouse: " + error.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">ClickHouse Connection</h2>
      <input
        type="text"
        name="host"
        placeholder="Host"
        value={formData.host}
        onChange={handleChange}
        className="p-2 border rounded mb-4 w-full"
      />
      <input
        type="number"
        name="port"
        placeholder="Port"
        value={formData.port}
        onChange={handleChange}
        className="p-2 border rounded mb-4 w-full"
      />
      <input
        type="text"
        name="database"
        placeholder="Database"
        value={formData.database}
        onChange={handleChange}
        className="p-2 border rounded mb-4 w-full"
      />
      <input
        type="text"
        name="user"
        placeholder="User"
        value={formData.user}
        onChange={handleChange}
        className="p-2 border rounded mb-4 w-full"
      />
      <input
        type="text"
        name="jwtToken"
        placeholder="JWT Token"
        value={formData.jwtToken}
        onChange={handleChange}
        className="p-2 border rounded mb-4 w-full"
      />
      <button
        onClick={handleConnect}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Connect
      </button>
    </div>
  );
};

export default ConnectionForm;
