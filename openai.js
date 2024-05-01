// openai.js
require('dotenv').config();
const axios = require('axios');

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

const openAI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

module.exports = openAI;