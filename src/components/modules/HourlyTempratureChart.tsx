import { HourlyTemperatureChartProps } from "@/types/module";

import CustomTooltip from "./CustomTooltip";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HourlyTemperatureChart = ({ data }: HourlyTemperatureChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="time"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} °`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line dataKey="temp" stroke="#2563eb" strokeWidth={2} dot={false} />
        <Line
          dataKey="feels_like"
          stroke="#64748b"
          strokeWidth={2}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HourlyTemperatureChart;
