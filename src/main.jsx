import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import App from './App';
    import Login from './pages/Login';
    import Register from './pages/Register';
    import Dashboard from './pages/Dashboard';
    import NewValidation from './pages/NewValidation';
    import Results from './pages/Results';
    import History from './pages/History';
    import BuyCredits from './pages/BuyCredits';
    import IntegrationsAPI from './pages/IntegrationsAPI';
    import Settings from './pages/Settings';
    import './index.css';

    ReactDOM.render(
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="new-validation" element={<NewValidation />} />
              <Route path="results" element={<Results />} />
              <Route path="history" element={<History />} />
              <Route path="buy-credits" element={<BuyCredits />} />
              <Route path="integrations-api" element={<IntegrationsAPI />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </Router>,
      document.getElementById('root')
    );
