import { WeatherData, GeocordingResponse, ForcastData } from './index';

export interface LocationAlertProps {
  title: string;
  description: string;
  onEnableLocation: () => void;
}

export interface WeatherErrorAlertProps {
  onRetry: () => void;
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

export interface TooltipProps {
  active?: boolean;
  payload?: { value: number }[];
}

export interface HourlyTemperatureChartProps {
  data: { time: string; temp: number; feels_like: number }[];
}
