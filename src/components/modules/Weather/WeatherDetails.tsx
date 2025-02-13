import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { WeatherDetailsProps } from "@/types/module";
import { weatherDetailsData } from "./WeatherDeatilsData";

import WeatherDetailItem from "./WeatherDetailItem";

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  // =============== Fetch Data =============
  const detailsLink = weatherDetailsData(data);

  // =============== Rendering =============
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2">
          {detailsLink.map((detail) => (
            <WeatherDetailItem
              key={detail.title}
              title={detail.title}
              value={detail.value}
              Icon={detail.Icon}
              color={detail.color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherDetails;
