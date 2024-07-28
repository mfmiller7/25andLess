import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default function Map() {
  const position: L.LatLngExpression = [42.3467, -71.0972];

  type LatLngTuple = [number, number];

  interface MarkerData {
    position: LatLngTuple;
    text: string;
  }

  const markers: MarkerData[] = [
    { position: [42.3518, -71.1336], text: "Brighton Music Hall" },
    { position: [42.3519, -71.1164], text: "Paradise Rock Club" },
    { position: [42.3571, -71.1336], text: "Roadrunner" },
    { position: [42.3473, -71.0956], text: "House of Blues" },
    { position: [42.3565, -71.0621], text: "Orpheum Theatre" },
    { position: [42.3476, -71.0847], text: "MGM Music Hall at Fenway" },
    { position: [42.3625, -71.0972], text: "Middle East - Zuzu" },
    { position: [42.3633, -71.0980], text: "Middle East - Corner Bakery" },
    { position: [42.3634, -71.0980], text: "Middle East - Downstairs" },
    { position: [42.3632, -71.0981], text: "Middle East - Upstairs" },
  ];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* for multiple markers */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};