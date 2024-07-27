'use client';

import React, { useState } from 'react';
import Loader from "@/components/ui/loader";


interface FormData {
    name: string;
    phone: string;
}

const CallbackForm = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', phone: '' });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Show loader

        const currentTime = new Date().toLocaleString();
        const htmlContent = ` 
                     <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; color: #333; max-width: 600px; margin: auto;">
                     <h2 style="color: #007BFF; margin-bottom: 15px; font-size: 24px;">Callback Request</h2>
                     <p style="font-size: 16px; line-height: 1.5;"><strong style="color: #555;">Name:</strong> ${formData.name}</p>
                     <p><strong>Phone Number:</strong> ${formData.phone}</p>
                     <p><strong>Time of Request:</strong> ${currentTime}</p> </div>`;

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: '', subject: 'Callback Request', message: htmlContent }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('Request sent successfully!');
                setFormData({ name: '', phone: '' });
            } else {
                setStatus('Failed to send request.');
            }
        } catch (error) {
            setStatus('An error occurred.');
        } finally {
            setLoading(false); // Hide loader
        }
    };

    return (
        <div className="p-5 rounded bg-white w-full">
            <h2 className="text-DiagnosRed font-semibold mb-2 text-center">Request a Callback</h2>
            <Loader visible={loading} height={50} width={50} ariaLabel="Submitting form" />
            {status && !loading && <p className="text-DiagnosGreen text-center mt-2">{status}</p>}
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                    className="p-2 border border-gray-300 rounded-md"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    className="p-2 border border-gray-300 rounded-md"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                />
                <button className="bg-DiagnosRed text-white py-2 px-4 cursor-pointer rounded-md" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
            <p className="mt-2">
                Have a simple question? <a className="text-DiagnosRed hover:underline" href="#">Check out our FAQ</a>
            </p>
        </div>
    );
};

export default CallbackForm;
