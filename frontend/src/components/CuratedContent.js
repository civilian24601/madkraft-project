// frontend/src/components/CuratedContent.js

import React from 'react';

const CuratedContent = ({ content }) => {
  return (
    <div className="card" id="curated-content">
      <h2>Curated Content</h2>
      {content && (
        <div>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          {/* You can add more details here, such as thumbnails, links, etc. */}
        </div>
      )}
    </div>
  );
}

export default CuratedContent;
