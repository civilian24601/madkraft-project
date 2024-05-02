// Import required modules
const express = require('express');
const youtubeSearch = require('youtube-search');
const axios = require('axios'); // Import axios for API requests
const generateContent = require('./generateContent');
const logger = require('./logger');

// Load API keys from .env
require('dotenv').config();
const youtubeApiKey = process.env.YOUTUBE_API_KEY;

// Import the route handlers
const curationRoutes = require('./routes/curation');
const dashboardRoutes = require('./routes/dashboard');

// Initialize the Express app
const app = express();

// Middleware to log incoming requests
const logRequest = (req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`, { body: req.body });
    next();
};
app.use(logRequest);

// Route to search for YouTube videos
app.get('/search/youtube', async (req, res) => {
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

        // Propose article ideas for the selected videos
        const articleIdeas = await generateArticleIdeas(videos);

        // Include the generated article ideas along with the reference videos
        const dataWithIdeas = videos.map((video, index) => ({
            ...video,
            articleIdea: articleIdeas[index],
        }));

        // Send the analyzed video data and generated article ideas as a JSON response
        res.json(dataWithIdeas);
    } catch (error) {
        console.error('Error searching YouTube videos:', error);
        res.status(500).json({ error: 'Failed to search YouTube videos' });
    }
});

// Function to generate article ideas for the selected videos
async function generateArticleIdeas(videos) {
    // Placeholder function to generate article ideas using AI
    // You can replace this with your actual implementation
    const articleIdeas = videos.map(video => {
        // For each video, generate a sample article idea
        return `An in-depth review of the video titled "${video.title}"`;
    });
    return articleIdeas;
}

// Add curation and dashboard routes
app.use('/curation', curationRoutes);
app.use('/dashboard', dashboardRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
