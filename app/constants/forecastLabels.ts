import { DateRange } from "@/app/enums/DateRange";

export const RangeText: Record<DateRange, string> = {
  [DateRange.Default]: "Forecast for 7",
  [DateRange.Extended]: "Forecast for 3",
};
