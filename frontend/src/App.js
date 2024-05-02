// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CuratedContent from './components/CuratedContent'; // Import the CuratedContent component
import './App.css';

function App() {
  // State to store the curated content
  const [curatedContent, setCuratedContent] = useState(null);

  // Mock data for testing
  const mockCuratedContent = {
    title: 'Sample Curated Content',
    description: 'This is a sample curated content description.',
    // Add more data fields as needed
  };

  // useEffect hook to fetch curated content from backend
  useEffect(() => {
    // For testing, setting mock data
    setCuratedContent(mockCuratedContent);
  }, []); // Empty dependency array as this effect doesn't depend on any props or state

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <h1>MadKraft Dashboard</h1>
        
        {/* Content Curation Card */}
        {curatedContent && (
          <div className="card" id="curation">
            <h2>Content Curation</h2>
            <div className="media-box">
              <p>{curatedContent.title}</p>
              <p>{curatedContent.description}</p>
            </div>
            <div className="content-details">
              {/* Add buttons for action steps */}
              <div className="actions">
                <button>Approve</button>
                <button>Edit</button>
                <button>Reject</button>
              </div>
            </div>
          </div>
        )}

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
