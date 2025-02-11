// WeatherErrorAlert.tsx
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { WeatherErrorAlertProps } from "@/types/module";
import { AlertTriangle } from "lucide-react";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

const WeatherErrorAlert = ({ onRetry }: WeatherErrorAlertProps) => (
  <Alert variant={"destructive"}>
    <AlertTriangle className="h-4 w-4" />
    <AlertTitle>Location Error</AlertTitle>
    <AlertDescription className="flex flex-col gap-4">
      <p>Failed to fetch weather data. Please try again.</p>
      <Button onClick={onRetry} variant={"outline"} className="w-fit">
        <RefreshCw className="mr-2 h-4 w-4" />
        Retry
      </Button>
    </AlertDescription>
  </Alert>
);

export default WeatherErrorAlert;
