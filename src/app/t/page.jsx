import { supabase } from "@/lib/supabaseClient";

export default async function Page() {
  // Fetch data from the "packages" table instead of "posts"
  const { data: packages, error } = await supabase.from("packages").select("*");
  console.log(packages);

  // Error handling in case fetching the data fails
  if (error) {
    console.error("Error fetching packages:", error.message);
    return <div>Error loading packages</div>;
  }

  return (
    <div>
      <h1>Packages</h1>
      <ul>
        {packages && packages.length > 0 ? (
          packages.map((pkg) => (
            <li key={pkg.id}>
              <h2>{pkg.name}</h2>
              <p>Original Price: {pkg.price.originalPrice}</p>
              <p>Discounted Price: {pkg.price.discountedPrice}</p>
              <p>Parameters: {pkg.test_details.parameters}</p>
              {/* Rendering nested JSON data */}
              <h3>Test Descriptions:</h3>
              <ul>
                {Object.entries(pkg.test_details.descriptions).map(
                  ([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  )
                )}
              </ul>
              <h3>FAQs:</h3>
              <ul>
                {Object.entries(pkg.test_details.faqs).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li>No packages available</li>
        )}
      </ul>
    </div>
  );
}
