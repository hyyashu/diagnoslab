"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { showSuccessToast, showErrorToast } from "@/components/Toast";

export default function Page() {
  const [name, setName] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [parameters, setParameters] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [faqs, setFaqs] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Format descriptions and faqs as JSON
    const descriptionsJson = JSON.parse(descriptions);
    const faqsJson = JSON.parse(faqs);

    // Insert data into Supabase
    const { data, error } = await supabase.from("packages").insert([
      {
        name,
        price: {
          originalPrice: parseFloat(originalPrice),
          discountedPrice: parseFloat(discountedPrice),
        },
        test_details: {
          parameters: parseInt(parameters),
          descriptions: descriptionsJson,
          faqs: faqsJson,
        },
      },
    ]);

    if (error) {
      showErrorToast(`Error inserting data: ${error.message}`);
      // Handle error (e.g., show a message to the user)
    } else {
      // Handle success (e.g., show a confirmation message or clear the form)
      showSuccessToast("Data inserted successfully");
    }
  };

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Add a New Package</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="originalPrice" className="block text-lg font-medium">
            Original Price:
          </label>
          <input
            id="originalPrice"
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="discountedPrice"
            className="block text-lg font-medium"
          >
            Discounted Price:
          </label>
          <input
            id="discountedPrice"
            type="number"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="parameters" className="block text-lg font-medium">
            Parameters:
          </label>
          <input
            id="parameters"
            type="number"
            value={parameters}
            onChange={(e) => setParameters(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="descriptions" className="block text-lg font-medium">
            Descriptions (JSON format):
          </label>
          <textarea
            id="descriptions"
            value={descriptions}
            onChange={(e) => setDescriptions(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="faqs" className="block text-lg font-medium">
            FAQs (JSON format):
          </label>
          <textarea
            id="faqs"
            value={faqs}
            onChange={(e) => setFaqs(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Package
        </button>
      </form>
    </div>
  );
}
