'use client';

import React, { useState } from 'react';

interface FormData {
    name: string;
    phone: string;
}

const CallbackForm = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', phone: '' });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleString();
        // Define the HTML content for the email
        const htmlContent = ` 
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; color: #333; max-width: 600px; margin: auto;">
                <h2 style="color: #007BFF; margin-bottom: 15px; font-size: 24px;">Callback Request</h2>
                                     <p  style="font-size: 16px; line-height: 1.5;"><strong  style="color: #555;>Name:</strong> ${formData.name}</p>
                                     <p><strong>Phone Number:</strong> ${formData.phone}</p>
                                     p><strong>Time of Request:</strong>${currentTime}</p></div>`;
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: '', subject: 'Callback Request', message : htmlContent,}),
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
        }
    };

    return (
        <div className="p-5 rounded bg-white w-[300px]">
            <h2 className="text-red-700 mb-5 text-center">Request a Callback</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="mb-2 text-sm font-medium">
                    Name:
                    <input
                        className="p-2 border border-gray-300 rounded"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                </label>
                <label className="mb-2 text-sm font-medium">
                    Phone Number:
                    <input
                        className="p-2 border border-gray-300 rounded"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                    />
                </label>
                <button className="bg-DiagnosRed text-white p-2 cursor-pointer rounded" type="submit">Send</button>
            </form>
            {status && <p className="mt-2">{status}</p>}
            <p className="mt-2">
                Have a simple question? <a className="text-red-700 hover:underline" href="#">Check out our FAQ</a>
            </p>
        </div>
    );
};

export default CallbackForm;
