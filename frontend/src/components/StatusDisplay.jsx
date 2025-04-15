import React from "react";

const StatusDisplay = ({ status }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Status</h2>
      <p>{status}</p>
    </div>
  );
};

export default StatusDisplay;
