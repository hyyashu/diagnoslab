import React from "react";

const PopularTest = [
  "Pregnancy Test",
  "Full Body Checkups",
  "Covid 19 Test",
  "Heart Test",
  "Kidney Test",
  "Liver Test",
  "CBC Test",
  "Cholesterol Test",
  "HbA1c Test",
  "Hepatitis B Test",
  "Kidney Function Test",
  "Liver Function Test",
  "Sugar Test",
  "Thyroid Test",
  "Typhoid Test",
  "Uric Acid Test",
  "Vitamin B12 Test",
  "Vitamin D Test",
  "Allergy Test",
  "Arthritis Test",
  "Cancer Test",
  "Bone And Joint",
  "Dengue Test",
  "Diabetes Test",
  "Rheumatoid Test",
  "Tuberculosis Test",
  "Infertility Test",
  "Diabetes Care",
  "Anemia Test",
  "GastroIntestinal",
  "Autoimmune Disorders",
  "Fever Test",
];

const PopularTests = () => {
  return (
    <div className="p-5 m-2 bg-red-200 rounded">
      <h5 className="px-1 text-2xl font-bold">Popular Tests</h5>
      <ul className="flex flex-wrap">
        {PopularTest.map((test, index) => (
          <li key={index}>
            <a href="#" className="px-1 font-semibold">
              {test}
            </a>
            {index < PopularTest.length - 1 && " |  "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTests;
