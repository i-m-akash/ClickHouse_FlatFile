import React from "react";

const PreviewTable = ({ data }) => {
  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="bg-white p-6 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Data Preview</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="border px-4 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header} className="border px-4 py-2">{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviewTable;
