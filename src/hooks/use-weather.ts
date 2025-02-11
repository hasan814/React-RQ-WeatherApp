import { weatherApi } from "@/services/weather"
import { Coordinates } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const WEATHER_KEYS = {
  weather: (coords: Coordinates) => ["weather", coords] as const,
  forcast: (coords: Coordinates) => ["forcast", coords] as const,
  location: (coords: Coordinates) => ["location", coords] as const,
} as const

export const useWeatherQuery = (coordinates: Coordinates | null) => {
  return useQuery({
    queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => coordinates ? weatherApi.getCurrentWeather(coordinates) : null, enabled: !!coordinates
  })
}

export const useForcastQuery = (coordinates: Coordinates | null) => {
  return useQuery({
    queryKey: WEATHER_KEYS.forcast(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => coordinates ? weatherApi.getForeCast(coordinates) : null, enabled: !!coordinates
  })
}

export const useReverseGeocodeQuery = (coordinates: Coordinates | null) => {
  return useQuery({
    queryKey: WEATHER_KEYS.location(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => coordinates ? weatherApi.reverseGeocode(coordinates) : null, enabled: !!coordinates
  })
}