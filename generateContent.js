const openAI = require('./openai');

async function generateContent(prompt, max_tokens) {
  try {
    const response = await openAI.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 600,
      n: 1,
      stop: null,
      temperature: 0.7,
    });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}

module.exports = generateContent;