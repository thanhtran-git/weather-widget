import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.get('/api/weather', async (req, res) => {
  try {
     const stationId = req.query.stationId || '10389';
    console.log(`Fetching weather data from DWD API for station ID: ${stationId}...`);
    const API_URL = `https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=${stationId}`;
    const response = await fetch(
      API_URL,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Weather Widget/1.0'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`DWD API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Successfully fetched weather data');
    res.json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data', message: error.message });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app; 