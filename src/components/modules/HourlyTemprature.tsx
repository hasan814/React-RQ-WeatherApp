import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatHourlyTemperature } from "@/utils/formatHourlyTemperature.ts";
import { HourlyWeatherProps } from "@/types/module";

import HourlyTemperatureChart from "./HourlyTempratureChart";

const HourlyTemperature = ({ data }: HourlyWeatherProps) => {
  const chartData = formatHourlyTemperature(data);

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Today's Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <HourlyTemperatureChart data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
