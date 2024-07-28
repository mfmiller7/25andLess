import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { markers, icon, position, windowHeight } from '../Constants';
import { PopupHeader, PopupAddress } from '../Styles';

export default function Map() {

  return (
    <MapContainer center={position} zoom={12} style={{ height: windowHeight-80, width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={icon}>
          <Popup>
            <PopupHeader>{marker.name}</PopupHeader>
            <PopupAddress>{marker.address}</PopupAddress>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};