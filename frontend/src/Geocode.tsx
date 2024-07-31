import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const Geocode = async (address: any) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: API_KEY,
      },
    });

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return [location.lat, location.lng];
    } else {
      throw new Error('Geocoding failed');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
  }
};