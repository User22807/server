const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    // Fetch data from the external API
    const response = await fetch('https://meta-test.rasa.capital/mock-api/markets');
    const data = await response.json();

    // Set CORS headers to allow access from other scripts
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Send the fetched data as the response
    res.status(200).json(data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};