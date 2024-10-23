const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/restaurant', async (req, res) => {
  try {
    const response = await axios.get('https://cdn-dev.preoday.com/challenge/venue/9');
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    res.status(error.response?.status || 500).json({ error: 'Error fetching data' });
  }
});


app.get('/api/menu', async (req, res) => {
  try {
    const response = await axios.get('https://cdn-dev.preoday.com/challenge/menu');
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching menu data:", error);
    res.status(error.response?.status || 500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
