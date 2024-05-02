// frontend/src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <h1>MadKraft Dashboard</h1>
        
        {/* Content Curation Card */}
        <div className="card" id="curation">
          <h2>Content Curation</h2>
          <div className="media-box">Video/Track Box</div>
          <div className="content-details">
            <p>Proposed article/review idea goes here.</p>
            <div className="actions">
              <button>Approve</button>
              <button>Edit</button>
              <button>Reject</button>
            </div>
          </div>
        </div>

        {/* Affiliate Management Card */}
        <div className="card" id="affiliate-management">
          <h2>Affiliate Management</h2>
          <ul className="affiliate-list">
            <li>
              <strong>Program Name</strong>
              <span>Active Links: 5</span>
              <span>Revenue: $500</span>
            </li>
          </ul>
          <button>Add New Program</button>
        </div>

        {/* E-Commerce Card */}
        <div className="card" id="ecommerce">
          <h2>E-Commerce</h2>
          <ul className="product-list">
            <li>
              <strong>Product Name</strong>
              <span>Price: $25</span>
              <span>Inventory: 100</span>
              <span>Sales: 50</span>
            </li>
          </ul>
          <button>Add New Product</button>
        </div>

        {/* Community Engagement Card */}
        <div className="card" id="community">
          <h2>Community Engagement</h2>
          <ul className="comment-list">
            <li>
              <strong>Username</strong>
              <p>Comment text...</p>
              <span>Post Title</span>
              <div className="actions">
                <button>Approve</button>
                <button>Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
