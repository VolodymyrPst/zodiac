export type DayProps = {
  day: string;
  date: number;
  points: {
    health: number;
    career: number;
    couple: number;
  };
};

export type ZodiacOption = {
  value: string;
  label: string;
};

export interface ZodiacSelectProps {
  onZodiacChange: () => void;
}

export interface ZodiacMoodProps {
  day: DayProps | null;
}
