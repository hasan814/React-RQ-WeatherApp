// LocationAlert.tsx
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertTriangle, MapPin } from "lucide-react";
import { LocationAlertProps } from "@/types/module";
import { Button } from "../ui/button";

const LocationAlert = ({
  title,
  description,
  onEnableLocation,
}: LocationAlertProps) => (
  <Alert variant={"destructive"}>
    <AlertTriangle className="h-4 w-4" />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription className="flex flex-col gap-4">
      <p>{description}</p>
      <Button onClick={onEnableLocation} variant={"outline"} className="w-fit">
        <MapPin className="mr-2 h-4 w-4" />
        Enable Location
      </Button>
    </AlertDescription>
  </Alert>
);

export default LocationAlert;
