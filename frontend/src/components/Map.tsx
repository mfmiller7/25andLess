import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { markers, personIcon, icon, windowHeight, defaultPosition } from '../Constants';
import { PopupHeader, PopupAddress } from '../Styles';
import ShowList from './ShowList';
import { MapProps } from '../types';
import { useEffect, useState } from 'react';

export const Map: React.FC<MapProps> = ({ position, isDefault }) => {
  const [center, setCenter] = useState(defaultPosition);
  
  useEffect(() => {
    setCenter(position);
  }, [position]); // still not centering around new address??

  return (
    <MapContainer center={center} zoom={14} style={{ height: windowHeight, width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {!isDefault && (
        <Marker position={position} icon={personIcon}>
          <Popup>
            <PopupHeader>You</PopupHeader>
          </Popup>
        </Marker>
      )}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={icon}>
          <Popup>
            <PopupHeader>{marker.name}</PopupHeader>
            <PopupAddress>{marker.address}</PopupAddress>
            <ShowList id={marker.id} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};