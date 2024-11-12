import React from 'react';

    const NewValidation = () => {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">New Validation</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Paste Email Lines (max 100)</label>
              <textarea className="w-full px-3 py-2 border rounded" rows="5"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Upload Email List (max 5000)</label>
              <input type="file" className="w-full px-3 py-2 border rounded" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Start Validation</button>
          </form>
        </div>
      );
    };

    export default NewValidation;
