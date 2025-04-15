import React, { useState } from "react";
import Papa from "papaparse"; // Install papa parse for CSV parsing

const FileUpload = ({ setColumns, setPreviewData, setStatus }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      setStatus("No file selected");
      return;
    }

    setStatus("Processing file...");
    Papa.parse(file, {
      complete: (result) => {
        const columns = result.data[0]; // Assume the first row contains column names
        setColumns(columns);
        setPreviewData(result.data.slice(0, 100)); // Get the first 100 rows for preview
        setStatus("File processed. Ready to preview and ingest.");
      },
      header: false,
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload CSV File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="p-2 border rounded mb-4 w-full"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;
