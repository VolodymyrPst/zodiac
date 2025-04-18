import { DateRange } from "@/app/enums/dateRange";

export const RangeText: Record<DateRange, string> = {
  [DateRange.Default]: "Forecast for 7",
  [DateRange.Extended]: "Forecast for 3",
};
