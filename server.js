const express = require('express');
const generateContent = require('./generateContent');
const app = express();
const logger = require('./logger');

// Middleware to log incoming requests
const logRequest = (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`, {
    body: req.body,
    headers: req.headers
  });
  next();
};

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to validate and sanitize request body
const validateRequestBody = (req, res, next) => {
  const { prompt, max_tokens } = req.body;

  // Check if prompt and max_tokens are present and valid
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ error: 'Prompt is required and must be a non-empty string' });
  }
  if (!max_tokens || typeof max_tokens !== 'number' || max_tokens <= 0) {
    return res.status(400).json({ error: 'Max_tokens is required and must be a positive number' });
  }

  // Sanitize prompt (if needed)
  req.body.prompt = prompt.trim(); // Example: Remove leading/trailing whitespace

  next();
};

// Apply logging middleware
app.use(logRequest);

// Apply validation and sanitization middleware
app.use(validateRequestBody);

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the MadKraft Content Generator!');
});

app.post('/generate', async (req, res) => {
  try {
    const { prompt, max_tokens } = req.body;
    const content = await generateContent(prompt, max_tokens);
    res.json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
