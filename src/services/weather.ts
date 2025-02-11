import { Coordinates, ForcastData, GeocordingResponse, WeatherData } from "@/types";
import { API_CONFIG } from "./configApi";

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({ appid: API_CONFIG.API_KEY, ...params })
    return `${endpoint}?${searchParams.toString()}`
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Weather API Error:${response.statusText}`)
    }
    return response.json()
  }

  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units
    })
    return this.fetchData<WeatherData>(url)
  }

  async getForeCast({ lat, lon }: Coordinates): Promise<ForcastData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units
    })
    return this.fetchData<ForcastData>(url)
  }

  async reverseGeocode({ lat, lon }: Coordinates): Promise<GeocordingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
      limit: 1,
    })
    return this.fetchData<GeocordingResponse[]>(url)
  }

}

export const weatherApi = new WeatherAPI()