import axios from 'axios';

const API_KEY = 'AIzaSyAZJsWB997890tlhuYgk4uDhoVKiZAsQuQ'; // process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const geocodeAddress = async (address: any) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: API_KEY,
      },
    });

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      const coordinates: L.LatLngExpression = [location.lat, location.lng];
      return coordinates;
    } else {
      throw new Error('Geocoding failed');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
  }
};