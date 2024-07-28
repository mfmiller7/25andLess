export interface Event {
    name: string;
    url: string;
    image: string;
    localDate: string;
    localTime: string;
    genre: string;
    subGenre: string;
    info: string;
    priceMin: number | null;
    priceMax: number | null;
    venueName: string;
    venueCity: string;
    venueState: string;
    venueCountry: string;
}

export interface ShowListProps {
    id: string;
}

type LatLngTuple = [number, number];

export interface MarkerData {
    id: string;
    position: LatLngTuple;
    name: string;
    address: string;
}