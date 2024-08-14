import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LatLngExpression } from 'leaflet';
import { PositionState } from './types';
import { defaultPosition } from './constants';

export const usePositionStore = create<PositionState>()(
  persist(
    (set) => ({
      coordinates: defaultPosition as L.LatLngExpression,
      default: true,
      setCoordinates: (coords: LatLngExpression) => set(() => ({ coordinates: coords, default: false })),
      resetToDefault: () => set(() => ({ coordinates: defaultPosition, default: true })),
    }),
    {
      name: 'position-storage', // Name of the storage key in localStorage
    }
  )
);