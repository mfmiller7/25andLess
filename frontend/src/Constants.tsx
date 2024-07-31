import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import { MarkerData } from './types';
import person from './person.png';

export const windowWidth = window.innerWidth;
export const windowHeight = window.innerHeight;

export const defaultPosition: L.LatLngExpression = [42.3467, -71.0972];

export const markers: MarkerData[] = [
    { id: 'KovZpapwne', position: [42.352859, -71.132561], name: "Brighton Music Hall", address: "158 Brighton Ave, Allston, MA 02134" },
    { id: 'KovZpZA11JtA', position: [42.352032, -71.119408], name: "Paradise Rock Club", address: "967 Commonwealth Ave, Boston, MA 02215" },
    { id: 'Z7r9jZa7rs', position: [42.356709, -71.143501], name: "Roadrunner", address: "89 Guest St, Boston, MA 02135" },
    { id: 'KovZpZAEA7eA', position: [42.347401, -71.095703], name: "House of Blues", address: "15 Lansdowne St, Boston, MA 02215" },
    { id: 'KovZpZA1J7JA', position: [42.356331, -71.060738], name: "Orpheum Theatre", address: "1 Hamilton Pl, Boston, MA 02108" },
    { id: 'KovZ917AEJz', position: [42.347056, -71.094734], name: "MGM Music Hall at Fenway", address: "2 Lansdowne St, Boston, MA 02215" },
    { id: 'KovZpZAId1kA', position: [42.3637557, -71.1014973], name: "Middle East", address: "472-480 Massachusetts Ave, Cambridge, MA 02139" }, // ME downstairs id...need to implement all but worried about API limit
];

export const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    iconSize: [20, 30],
});

export const personIcon = L.icon({
    iconUrl: person,
    iconSize: [50, 60],
});