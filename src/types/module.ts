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

