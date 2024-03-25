
import fetch from 'node-fetch';
import compression from 'compression';

// Enable compression middleware
const compress = compression();


export const getPlaceFromId = async (req, res) => {
    res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST');
    
    // Use the compression middleware to compress the response
    compress(req, res, async () => {
        // Extract query text from the query parameters
        const { query } = req.query;
        const apiKey = process.env.APIKEY;

        if (!query) {
            return res.status(400).json({ error: 'Query text is required' });
        }

        try {
            // Google Places Autocomplete API endpoint
            const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(query)}&key=${encodeURIComponent(apiKey)}`;

            // Fetch predictions from the Google Places Autocomplete API
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Failed to fetch predictions');
            }

            // Parse the response as JSON
            const data = await response.json();

            // Return the response body
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching predictions:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
};



