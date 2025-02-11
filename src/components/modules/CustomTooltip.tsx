import { TooltipProps } from "@/types/module";

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center">
            <span className="text-[0.7rem] uppercase text-muted-foreground">
              Temperature
            </span>
            <span className="font-bold">{payload[0].value} °</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[0.7rem] uppercase text-muted-foreground">
              Feels Like
            </span>
            <span className="font-bold">{payload[1].value} °</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
