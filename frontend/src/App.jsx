import "./index.css"; 
import React, { useState } from "react";
import ConnectionForm from "./components/ConnectionForm";
import FileUpload from "./components/FileUpload";
import ColumnSelector from "./components/ColumnSelector";
import PreviewTable from "./components/PreviewTable";
import StatusDisplay from "./components/StatusDisplay";

const App = () => {
  const [sourceType, setSourceType] = useState("ClickHouse");
  const [columns, setColumns] = useState([]);
  const [previewData, setPreviewData] = useState([]);
  const [status, setStatus] = useState("");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Data Ingestion UI</h1>

      <div className="mb-4">
        <label className="mr-4">Select Source:</label>
        <select
          value={sourceType}
          onChange={(e) => setSourceType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="ClickHouse">ClickHouse</option>
          <option value="FlatFile">Flat File</option>
        </select>
      </div>

      {sourceType === "ClickHouse" ? (
        <ConnectionForm setColumns={setColumns} setPreviewData={setPreviewData} setStatus={setStatus} />
      ) : (
        <FileUpload setColumns={setColumns} setPreviewData={setPreviewData} setStatus={setStatus} />
      )}

      {columns.length > 0 && <ColumnSelector columns={columns} />}
      {previewData.length > 0 && <PreviewTable data={previewData} />}
      {status && <StatusDisplay status={status} />}
    </div>
  );
};

export default App;
