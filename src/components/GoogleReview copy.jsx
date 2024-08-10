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
        if (document.body.contains(mapDiv)) {
          document.body.removeChild(mapDiv);
        }
      };
    }
  }, [isLoaded, loadError]);

  if (loadError) {
    return <div>Error loading map</div>;
  }

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
                <i key={i} className="fa-light fa-star text-primary"></i>
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
