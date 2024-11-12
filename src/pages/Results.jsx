import React from 'react';

    const Results = () => {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Filter Bad Emails</label>
            <input type="checkbox" className="mr-2" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Download CSV</button>
        </div>
      );
    };

    export default Results;
