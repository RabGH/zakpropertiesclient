export const isMultiple = (value: number | null | undefined) =>
  (value ?? 0) == 0 || (value ?? 0) > 1 ? "s" : "";

export function formatNumberWithCommas(num: number | null | undefined): string {
  return (num ?? "").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatPrice(price: number | null | undefined): string {
  return `AED: ${formatNumberWithCommas(price ?? 0)}`;
}

export function formatArea(area: number | null | undefined): string {
  return `${formatNumberWithCommas(area ?? 0)} sqft`;
}
