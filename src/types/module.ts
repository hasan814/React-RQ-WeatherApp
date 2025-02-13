import { WeatherData, GeocordingResponse, ForcastData } from './index';
import { ComponentType, SVGProps } from "react";

export interface LocationAlertProps {
  title: string;
  description: string;
  onEnableLocation: () => void;
}

export interface WeatherErrorAlertProps {
  onRetry?: () => void;
}

export interface LocationButtonProps {
  onClick: () => void;
}

export interface FavoriteCitiesProps {
  onRefresh: () => void;
  isLoading: boolean;
}
export interface CurrentWeatherProps {
  data: WeatherData,
  locationName?: GeocordingResponse
}
export interface HourlyWeatherProps {
  data: ForcastData,
}
export interface WeatherDetailsProps {
  data: WeatherData,
}
export interface WeatherForcastProps {
  data: ForcastData,
}

export interface TooltipProps {
  active?: boolean;
  payload?: { value: number }[];
}

export interface HourlyTemperatureChartProps {
  data: { time: string; temp: number; feels_like: number }[];
}


export interface WeatherDetailItemProps {
  title: string;
  value: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

export interface IDailyForcastTypes {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string
  }
}

export interface ILocation {
  lat: number;
  lon: number;
  name: string;
  state?: string;
  country: string;
  searchAt: string | Date;
}

export interface ISearchHistoryProps {
  history: ILocation[];
  clearHistory: { mutate: () => void };
  selectHandler: (cityData: string) => void;
}

export interface ISuggestionsProps {
  locations: ILocation[];
  isLoading: boolean;
  selectHandler: (cityData: string) => void;
}

export interface ISearchDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  locations: ILocation[];
  isLoading: boolean;
  history: ILocation[];
  clearHistory: { mutate: () => void };
  selectHandler: (cityData: string) => void;
}


export interface IFavoriteBtnProps {
  data: WeatherData
}

export interface IFavoriteTabletProps {
  id: string;
  lat: number;
  lon: number;
  name: string;
  onRemove: (id: string) => void
}