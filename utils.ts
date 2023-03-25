export const isMultiple = (value: number) =>
  value == 0 || value > 1 ? "s" : "";

export function formatNumberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatPrice(price: number): string {
  return `AED ${formatNumberWithCommas(price)}`;
}

export function formatArea(area: number): string {
  return `${formatNumberWithCommas(area)} sqft`;
}
