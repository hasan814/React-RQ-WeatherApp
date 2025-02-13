import { Coordinates } from "./index";

export interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: boolean;
}

export interface ISearchHoistoryProps {
  id: string;
  lat: number;
  lon: number;
  name: string;
  query: string;
  state?: string;
  country: string;
  searchAt: number
}

export interface IFavoriteItemProps {
  id: string;
  lat: number;
  lon: number;
  name: string;
  state?: string;
  country: string;
  AddedAt: number;
}