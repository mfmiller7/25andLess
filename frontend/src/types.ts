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
};

export interface ShowListProps {
    id: string;
};

export interface MarkerData {
    id: string;
    position: any;
    name: string;
    address: string;
};

export interface AddressModalProps {
  open: boolean;
  onClose: () => void;
  onAddressSubmit: (coordinates: any) => void;
};

export interface MapProps {
    position: any;
    isDefault: boolean;
};