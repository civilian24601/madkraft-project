// routes/curation.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Load API keys from .env
require('dotenv').config();
const youtubeApiKey = process.env.YOUTUBE_API_KEY;

// Route to search for YouTube videos
router.get('/search/youtube', async (req, res) => {
    const query = req.query.q || 'latest music'; // Default query if not provided
    try {
        // Make API request to YouTube Data API
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: youtubeApiKey,
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: 5, // Adjust number of results as needed
            },
        });

        // Extract relevant video information from API response
        const videos = response.data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnails: item.snippet.thumbnails,
        }));

        // Send the fetched videos as a JSON response
        res.json(videos);
    } catch (error) {
        console.error('Error searching YouTube videos:', error);
        res.status(500).json({ error: 'Failed to search YouTube videos' });
    }
});

// Mock API response
router.get('/', (req, res) => {
  // This would be replaced with real curated content from your AI tool
  res.json({ curatedContent: 'Sample curated content.' });
});

module.exports = router;
