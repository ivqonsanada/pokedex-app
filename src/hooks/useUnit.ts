export const useUnit = (unit: string, value: any) => {
  return new Intl.NumberFormat("en", {
    style: "unit",
    unit: unit,
    maximumFractionDigits: 1,
  }).format(value);
};
