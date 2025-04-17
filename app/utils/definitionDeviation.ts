export const definitionDeviation = (
  a: number,
  b: number,
  c: number
): { type: string; average: number } => {
  const average = (a + b + c) / 3;

  const values = { health: a, career: b, couple: c };

  const deviations = Object.entries(values).map(([key, value]) => ({
    type: key,
    deviation: Math.abs(value - average),
  }));

  const mostDeviated = deviations.reduce((prev, curr) =>
    curr.deviation > prev.deviation ? curr : prev
  );

  return { type: mostDeviated.type, average: average };
};
