import React, { useState } from "react";
import Loader from "@/components/ui/loader";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const CallbackForm = ({
  layout = "portrait",
  showFAQ = true,
  ShowTitle = true,
}) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const currentTime = new Date().toLocaleString();
    const currentPath = window.location.pathname;
    // const htmlContent = `
    //   <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; color: #333; max-width: 600px; margin: auto;">
    //     <h2 style="color: #007BFF; margin-bottom: 15px; font-size: 24px;">Callback Request</h2>
    //     <p style="font-size: 16px; line-height: 1.5;"><strong style="color: #555;">Name:</strong> ${formData.name}</p>
    //     <p><strong>Phone Number:</strong> ${formData.phone}</p>
    //     <p><strong>Time of Request:</strong> ${currentTime}</p>
    //   </div>
    // `;
    const message = `Dear Team,

We’ve received a new lead. Please follow up with them as soon as possible

Name: ${formData.name}
Phone Number: ${formData.phone}
Time of Request: ${currentTime}
URL Path: ${currentPath}`;

    try {
      const response = await fetch("/api2/whatsapp/sendMessageGroup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groupId: "120363312991542668@g.us", // group ID
          message: message,
        }),
      });

      // try {
      //   const response = await fetch("/api/sendEmail", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       name: formData.name,
      //       email: "",
      //       subject: "Callback Request",
      //       message: htmlContent,
      //     }),
      //   });

      const result = await response.json();
      if (result.success) {
        setStatus("Request sent successfully!");
        setFormData({ name: "", phone: "" });
        setSubmitted(true);
      } else {
        setStatus("Failed to send request.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full p-5 bg-white rounded">
      {submitted ? (
        <div className="text-center">
          <i className="fa-duotone fa-solid fa-check fa-2xl"></i>
          <h2 className="mb-2 font-semibold text-center text-primary">
            Thank You!
          </h2>
          <p className="font-bold text-center text-green-600">
            Our Health Advisor will contact you shortly.
          </p>
        </div>
      ) : (
        <>
          {ShowTitle && (
            <h2 className="mb-2 font-semibold text-center text-primary">
              Request a Callback
            </h2>
          )}
          {/* <Loader
        visible={loading}
        height={50}
        width={50}
        ariaLabel="Submitting form"
      /> */}
          {status && !loading && (
            <p className="mt-2 font-bold text-center text-green-600">
              {status}
            </p>
          )}
          <form
            className={`flex flex-col space-y-4 ${
              layout === "landscape"
                ? "md:flex-row md:space-x-4 md:space-y-0 justify-center"
                : ""
            }`}
            onSubmit={handleSubmit}
          >
            <input
              className="w-full p-2 border border-gray-300 rounded-md md:w-auto"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              className="w-full p-2 border border-gray-300 rounded-md md:w-auto"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <Button
              id="callbacksubmit"
              type="submit"
              disabled={loading}
              className="w-full md:w-auto"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
          {showFAQ && (
            <p className="mt-2">
              Have a simple question?{" "}
              <a className="text-DiagnosRed hover:underline" href="#">
                Check out our FAQ
              </a>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default CallbackForm;
