"use client"
import { useState, useEffect } from 'react';

type Job = {
    id: number;
    title: string;
    location: string;
    type: string;
    responsibilities: string[];
    requirements: string[];
    applyLink: string;
};

const Careers: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/careers.json');
            const data = await response.json();
            setJobs(data); // Set the data fetched from careers.json
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Careers at Diagnos Lab</h1>
            <div className="space-y-8">
                {jobs.map((job) => (
                    <div key={job.id} className="p-6 border rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                        <p className="text-gray-600 mb-4">{job.location} - {job.type}</p>
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
                        <a
                            href={job.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-DiagnosRed text-white py-2 px-4 rounded hover:bg-DiagnosGreen"
                        >
                            Apply Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;























//
// export default function Page() {
//     return  <>
//         <div className="flex justify-center">
//             <h1 className=""> Join our dynamic pathology lab and embark on a rewarding career where learning never stops.</h1>
//         </div>
//         <div className="flex flex-wrap text-center pt-2 pb-5">
//             <p>
//                 Here, you'll gain invaluable experience in cutting-edge diagnostic techniques while working alongside local industry experts. Our supportive and collaborative team environment ensures you'll feel valued and happy, fostering personal and professional growth. We believe in the power of teamwork, where every member's contribution is celebrated.
//             </p>
//         </div>
//         <div>
//             <></>
//
//         </div>
//     </>
// }