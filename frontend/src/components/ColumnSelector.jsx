import React, { useState } from "react";

const ColumnSelector = ({ columns }) => {
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleCheckboxChange = (e) => {
    const column = e.target.value;
    setSelectedColumns((prevSelected) =>
      prevSelected.includes(column)
        ? prevSelected.filter((item) => item !== column)
        : [...prevSelected, column]
    );
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Columns</h2>
      <div>
        {columns.map((column) => (
          <div key={column} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={column}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label>{column}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnSelector;
