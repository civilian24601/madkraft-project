// frontend/src/components/VideoThumbnail.js
import React from 'react';

const VideoThumbnail = ({ video }) => {
  return (
    <div className="video-thumbnail">
      <a href={video.link} target="_blank" rel="noopener noreferrer">
        <img src={video.thumbnails.medium.url} alt={video.title} />
      </a>
      <h3><a href={video.link} target="_blank" rel="noopener noreferrer">{video.title}</a></h3>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoThumbnail;
