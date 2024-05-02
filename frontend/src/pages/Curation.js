// frontend/src/pages/Curation.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContentCard from '../components/ContentCard'; // Import ContentCard component
import '../components/ContentCard.css'; // Import ContentCard styles

function Curation() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/search/youtube?q=music') // Adjust query as needed
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching video data:', error));
  }, []);

  return (
    <div id="curation">
      <h1>Content Curation</h1>
      <div className="content-cards">
        {/* Map through fetched video data and render ContentCard for each item */}
        {videos.map((video, index) => (
          <ContentCard
            key={index}
            title={video.title}
            description={video.description}
            mediaUrl={video.link} // Assuming link is the URL to the video
            additionalDetails={{
              publishedAt: video.publishedAt,
              channelId: video.channelId,
              channelTitle: video.channelTitle
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Curation;
