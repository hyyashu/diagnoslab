const fs = require("fs");
const path = require("path");

// Load the JSON data from the public folder
const routesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./public/data.json"))
);

// Helper function to create URL-friendly slugs
const createSlug = (name) => {
  return name
    .toString() // Convert input to a string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[^\w\s-]/g, "") // Remove all special characters except dashes and spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

// Convert "name" into a slug-friendly format (e.g., "Ante Natal Package" -> "ante-natal-package")
const dynamicRoutes = routesData.map((route) => {
  const slug = createSlug(route.name); // Converts spaces to hyphens and lowercases the string
  return `/packages/${slug}`;
});

module.exports = {
  siteUrl: "https://diagnoslab.in",
  generateRobotsTxt: true,
  exclude: [
    "/editor",
    "/editor/*",
    "/dashboard",
    "/dashboard/*",
    "/blogs",
    "/tests",
  ],
  additionalPaths: async (config) => {
    return dynamicRoutes.map((route) => ({
      loc: route,
      changefreq: "weekly",
      priority: 0.7,
    }));
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
};
