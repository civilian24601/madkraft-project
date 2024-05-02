// frontend/src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>MadKraft Dashboard</h2>
      <nav>
        <ul>
          <li><a href="#curation">Curation</a></li>
          <li><a href="#affiliate-management">Affiliate Management</a></li>
          <li><a href="#ecommerce">E-Commerce</a></li>
          <li><a href="#community">Community Engagement</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
