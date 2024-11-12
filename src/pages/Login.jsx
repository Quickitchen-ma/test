import React from 'react';

    const Login = () => {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full px-3 py-2 border rounded" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
            </form>
          </div>
        </div>
      );
    };

    export default Login;