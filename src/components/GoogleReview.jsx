import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAa3-MzaVtRY7txCG_-EYrWQa4TWCNu8b4",
    libraries,
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      // Create a hidden div for the PlacesService
      const mapDiv = document.createElement("div");
      mapDiv.style.display = "none";
      document.body.appendChild(mapDiv);

      const service = new google.maps.places.PlacesService(mapDiv);
      service.getDetails(
        { placeId: "ChIJK7tAjwjj9TkRc6IthQcJGEY", fields: ["reviews"] },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setReviews((place.reviews || []).slice(0, 4));
          }
        }
      );
      return () => {
        document.body.removeChild(mapDiv);
      };
    }
  }, [isLoaded, loadError]);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Google Reviews</h2>
        <a
          href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x39f5e3088f40bb2b:0x46180907852da273!12e1?source=g.page.m.nr._&laa=nmx-review-solicitation-recommendation-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Review us on Google
          </button>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <div className="flex items-center mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.69 5.204a1 1 0 00.95.69h5.462c.969 0 1.372 1.24.588 1.81l-4.406 3.19a1 1 0 00-.364 1.118l1.69 5.204c.3.921-.755 1.688-1.54 1.118l-4.406-3.19a1 1 0 00-1.175 0l-4.406 3.19c-.784.57-1.838-.197-1.54-1.118l1.69-5.204a1 1 0 00-.364-1.118l-4.406-3.19c-.784-.57-.38-1.81.588-1.81h5.462a1 1 0 00.95-.69l1.69-5.204z" />
                </svg>
              ))}
            </div>
            <p className="mb-2">{review.text}</p>
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={review.profile_photo_url}
                alt={review.author_name}
              />
              <div>
                <p className="text-sm font-semibold">{review.author_name}</p>
                <p className="text-xs text-gray-500">
                  {review.relative_time_description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoogleReviews;
