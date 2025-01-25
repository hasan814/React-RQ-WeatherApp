import { useEffect, useState } from "react";
import { GeolocationState } from "@/types/hooks";

export const useGeolocation = () => {
  // ============= State =============
  const [locationData, setLocationData] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    isLoading: true,
  });

  // ============= Function =============
  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));
    if (!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        error: "Geolocation is not supported by your browser",
        isLoading: false,
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        let errorMessage: string;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied.Please enable location access.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location Information is Unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request time out.";
            break;
          default:
            errorMessage = "An Unknown error occured";
        }
        setLocationData({
          coordinates: null,
          error: errorMessage,
          isLoading: false,
        });
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  // ============= Effect =============
  useEffect(() => {
    getLocation();
  }, []);

  // ============= Rendering =============
  return {
    ...locationData,
    getLocation,
  };
};
