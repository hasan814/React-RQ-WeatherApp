import { WeatherDetailItemProps } from "@/types/module";

const WeatherDetailItem = ({
  title,
  value,
  Icon,
  color,
}: WeatherDetailItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border p-4">
      <Icon className={`h-5 w-5 ${color}`} />
      <div>
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
};

export default WeatherDetailItem;
