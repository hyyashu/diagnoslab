import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// Function to calculate discount percentage
export function calculateDiscountPercentage(originalPrice, discountedPrice) {
  return ((originalPrice - discountedPrice) / originalPrice) * 100;
}

// Function to round up to a specific decimal place
export function roundUp(value, decimalPlaces = 0) {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.ceil(value * multiplier) / multiplier;
}
