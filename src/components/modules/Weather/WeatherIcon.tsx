import { WeatherIconProps } from "@/types/module";

const WeatherIcon = ({ icon, description }: WeatherIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          className="h-full w-full object-contain"
          alt={description}
        />
        <div className="absolute bottom-0 text-center">
          <p className="text-sm font-medium capitalize">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherIcon;
