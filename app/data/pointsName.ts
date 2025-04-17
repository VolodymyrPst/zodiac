export const pointsName = ["health", "career", "couple"] as const;
export type PointName = (typeof pointsName)[number];
