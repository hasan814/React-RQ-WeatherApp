import { WeatherData, GeocordingResponse } from './index';

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

export interface CurrentWeatherProps {
  data: WeatherData,
  locationName?: GeocordingResponse
}