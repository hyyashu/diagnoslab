"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    role: "",
    message: "",
    resume: null,
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/careers.json");
      const data = await response.json();
      setJobs(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/uploadFile", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      return result.url;
    } else {
      throw new Error(result.error || "File upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let resumeUrl = "";
      if (formData.resume) {
        resumeUrl = await uploadFile(formData.resume);
      }

      const emailContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; color: #333; max-width: 600px; margin: auto;">
          <h2 style="color: #007BFF; margin-bottom: 15px; font-size: 24px;">Job Application</h2>
          <p style="font-size: 16px; line-height: 1.5;"><strong style="color: #555;">Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone Number:</strong> ${formData.number}</p>
          <p><strong>City:</strong> ${formData.city}</p>
          <p><strong>Role:</strong> ${formData.role}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
          <p><strong>Resume:</strong> ${resumeUrl ? `<a href="${resumeUrl}">Download Resume</a>` : "No Resume Attached"}</p>
        </div>
      `;

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          subject: `Job Application for ${formData.role}`,
          message: emailContent,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          city: "",
          role: "",
          message: "",
          resume: null,
        });
      } else {
        setStatus("Failed to submit the application.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const toggleJobDetails = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Careers at Diagnos Lab</h1>
      <div className="space-y-8">
        {jobs.map((job) => (
          <div key={job.id} className="p-6 border rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{job.title}</h2>
              <Button
                onClick={() => toggleJobDetails(job.id)}
                className="text-white"
              >
                {expandedJob === job.id ? "Hide Details" : "Show Details"}
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              {job.location} - {job.type}
            </p>
            {expandedJob === job.id && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside mb-4">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                <ul className="list-disc list-inside mb-4">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
            <a
              href="#jobapplication-form"
              className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-DiagnosGreen"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
      <form
        id="jobapplication-form"
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 max-w-4xl mx-auto px-4 py-6 bg-white border border-gray-200 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Apply for a Position
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Applying for Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              required
            >
              <option value="">Select a role</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Resume
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="mt-1 block w-full text-gray-900 bg-gray-50 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              accept=".pdf, .jpeg, .jpg, .png, .gif, .doc, .docx"
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-primary text-white py-2 px-4 rounded hover:bg-DiagnosGreen"
        >
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Submit Application"
          )}
        </Button>
        {status && !loading && (
          <p className="text-DiagnosGreen text-center mt-2">{status}</p>
        )}
      </form>
    </div>
  );
};

export default Careers;
