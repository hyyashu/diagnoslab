/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The string to be converted into a slug.
 * @returns {string} - The URL-friendly slug.
 */
export const createSlug = (text) => {
  return text
    .toString() // Convert input to a string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[^\w\s-]/g, "") // Remove all special characters except dashes and spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};
