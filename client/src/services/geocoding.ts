import axios from 'axios';

export interface Coordinates {
  lat: number;
  lng: number;
}

export const geocodeAddress = async (address: string): Promise<Coordinates | null> => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: 'YOUR_API_KEY_HERE', // Replace with your API key
      },
    });

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      console.error('Geocoding error:', response.data.status, response.data.error_message);
      return null;
    }
  } catch (error) {
    console.error('Geocoding request error:', error);
    return null;
  }
};