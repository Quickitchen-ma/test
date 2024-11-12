import React from 'react';
    import { Outlet, Link } from 'react-router-dom';

    const Dashboard = () => {
      return (
        <div className="flex">
          <div className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <ul>
              <li><Link to="new-validation" className="block py-2 px-4 hover:bg-gray-700">New Validation</Link></li>
              <li><Link to="results" className="block py-2 px-4 hover:bg-gray-700">Results</Link></li>
              <li><Link to="history" className="block py-2 px-4 hover:bg-gray-700">History</Link></li>
              <li><Link to="buy-credits" className="block py-2 px-4 hover:bg-gray-700">Buy Credits</Link></li>
              <li><Link to="integrations-api" className="block py-2 px-4 hover:bg-gray-700">Integrations & API</Link></li>
              <li><Link to="settings" className="block py-2 px-4 hover:bg-gray-700">Settings</Link></li>
            </ul>
          </div>
          <div className="flex-1 p-4">
            <Outlet />
          </div>
        </div>
      );
    };

    export default Dashboard;
