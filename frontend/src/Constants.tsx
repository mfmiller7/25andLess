import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

export const windowWidth = window.innerWidth;
export const windowHeight = window.innerHeight;

// for the map

type LatLngTuple = [number, number];

interface MarkerData {
    position: LatLngTuple;
    text: string;
}

export const markers: MarkerData[] = [
    { position: [42.352859, -71.132561], text: "Brighton Music Hall" },
    { position: [42.352032, -71.119408], text: "Paradise Rock Club" },
    { position: [42.356709, -71.143501], text: "Roadrunner" },
    { position: [42.347401, -71.095703], text: "House of Blues" },
    { position: [42.356331, -71.060738], text: "Orpheum Theatre" },
    { position: [42.347056, -71.094734], text: "MGM Music Hall at Fenway" },
    { position: [42.3637557, -71.1014973], text: "Middle East" },
];

export const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    iconSize: [20, 30],
});

export const position: L.LatLngExpression = [42.3467, -71.0972];