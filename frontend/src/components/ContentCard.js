// frontend/src/components/ContentCard.js

import React from 'react';
import './ContentCard.css';

const ContentCard = ({ title, description, mediaUrl, additionalDetails }) => {
  return (
    <div className="content-card">
      <h2>{title}</h2>
      <div className="media-preview">
        {/* Placeholder for media content */}
        {/* You can add actual media content here */}
      </div>
      <p>{description}</p>
      <div className="additional-details">
        {/* Placeholder for additional details */}
        {/* You can add actual additional details content here */}
      </div>
    </div>
  );
};

export default ContentCard;
