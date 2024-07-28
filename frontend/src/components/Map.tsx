import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { markers, icon, position, windowHeight } from '../Constants';

export default function Map() {

  return (
    <MapContainer center={position} zoom={13} style={{ height: windowHeight-40, width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={icon}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};