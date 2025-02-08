// src/Sidebar.jsx
import React from 'react';

function Sidebar() {
  return (
    <div style={{ width: '200px', height:'600px' ,backgroundColor: '#f0f0f0', padding: '20px' }}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/upload">Upload Image</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
