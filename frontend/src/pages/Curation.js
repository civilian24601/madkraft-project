// frontend/src/pages/Curation.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Curation() {
  const [curatedContent, setCuratedContent] = useState('');

  useEffect(() => {
    axios.get('/api/curation')
      .then(response => setCuratedContent(response.data.curatedContent))
      .catch(error => console.error('Error fetching curated content:', error));
  }, []);

  return (
    <div id="curation">
      <h1>Content Curation</h1>
      <div>
        <p>{curatedContent}</p>
      </div>
    </div>
  );
}

export default Curation;
