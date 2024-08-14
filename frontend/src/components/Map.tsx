import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { markers, personIcon, icon, windowHeight } from '../constants';
import { PopupHeader, PopupAddress } from '../styles';
import ShowList from './ShowList';
import { usePositionStore } from '../usePositionStore';
import { useEffect } from 'react';

export const Map = () => {
  
  const coordinates = usePositionStore((state) => state.coordinates);
  const isDefault = usePositionStore((state) => state.default);
  
  return (
    <MapContainer center={coordinates} zoom={14} style={{ height: windowHeight-40, width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {!isDefault && (
        <Marker position={coordinates} icon={personIcon}>
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