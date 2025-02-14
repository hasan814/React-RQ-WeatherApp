import { TemperatureInfoProps } from "@/types/module";
import { ArrowDown, ArrowUp } from "lucide-react";
import { formatTemp } from "@/utils/formatTemp";

const TemperatureInfo = ({
  temp,
  feels_like,
  temp_min,
  temp_max,
}: TemperatureInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-7xl font-bold tracking-tighter">{formatTemp(temp)}</p>
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">
          Feels like {formatTemp(feels_like)}
        </p>
        <div className="flex gap-2 text-sm font-medium">
          <span className="flex items-center gap-1 text-blue-500">
            <ArrowDown className="h-3 w-3" />
            {formatTemp(temp_min)}
          </span>
          <span className="flex items-center gap-1 text-red-500">
            <ArrowUp className="h-3 w-3" />
            {formatTemp(temp_max)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureInfo;
