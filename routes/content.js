// routes/content.js
const express = require('express');
const router = express.Router();
const openAI = require('../openai');

router.post('/generate-content', async (req, res) => {
  try {
    const { prompt, max_tokens } = req.body;

    const response = await openAI.post('/completions', {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: max_tokens,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    res.json({ content: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error Details:', error.response.data);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

module.exports = router;