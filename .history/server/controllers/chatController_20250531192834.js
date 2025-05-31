const ChatMessage = require('../models/ChatMessage');
const { OpenAI } = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Load from .env
});

const chatHandler = async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: 'Message is required' });

  try {
    // Save user message to MongoDB
    await ChatMessage.create({ sender: 'user', text: message });

    // Get reply from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.choices[0].message.content;

    // Save bot reply to MongoDB
    await ChatMessage.create({ sender: 'bot', text: reply });

    // Send reply to frontend
    res.json({ reply });
  } catch (err) {
    console.error('AI error:', err);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
};

module.exports = { chatHandler };
