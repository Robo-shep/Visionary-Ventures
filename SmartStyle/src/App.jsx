// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <div>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ padding: '20px' }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<ImageUpload />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

