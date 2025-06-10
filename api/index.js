const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    // Fetch data from the external API
    const response = await fetch('https://meta-test.rasa.capital/mock-api/markets');
    const data = await response.json();

    // Send the fetched data as the response
    res.status(200).json(data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};