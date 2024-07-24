// import React, { useCallback } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { geocodeAddress } from '../services/geocoding';

// const mapCenter = { lat: 42.3601, lng: -71.0589 }; // Boston coordinates

// const locations = [
//   { id: 1, name: 'Road Runner', position: geocodeAddress('89 Guest St, Boston, MA 02135') },
//   { id: 2, name: 'Brighton Music Hall', position: geocodeAddress('158 Brighton Ave, Allston, MA 02134') },
//   { id: 3, name: 'Paradise Rock Club', position: geocodeAddress('967 Commonwealth Ave, Boston, MA 02215') },
// ];

// const Map: React.FC = () => {
//   const handleMarkerClick = useCallback((locationId: number) => {
//     alert(`Marker clicked: ${locationId}`);
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
//       <GoogleMap
//         mapContainerStyle={{ width: '100%', height: '400px' }}
//         center={mapCenter}
//         zoom={13}
//       >
//         {locations.map((location) => (
//           <Marker
//             key={location.id}
//             position={location.position}
//             onClick={() => handleMarkerClick(location.id)}
//           />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

export default Map;