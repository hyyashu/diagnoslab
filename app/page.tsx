'use client'
import "./globals.css";
import data from "../public/data.json"
import TestCard, {CardProps} from '../sections/TestCard';
import {useEffect, useState} from "react"; // Import the interface


export default function Home() {
    const [tests,       setTests] = useState<CardProps[]>([]); // Use the imported interface

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./data.json');
            const data = await response.json();
            setTests(data.slice(0, 5)); // Limit to 5 items
        };
        fetchData();
    },[]);
    return (
        <main className="main">
            <div className="flex flex-wrap items-center justify-around pt-2 pb-5 bg-gradient-to-r">
                <section
                    className="flex justify-around items-start p-8 flex-wrap">
                    <div className="p-5 rounded bg-white w-[300px]">
                        <h2 className="text-red-700 mb-5 text-center">Request a CallBack</h2>
                        <form className="flex flex-col">
                            <input className="p-2 mb-2 border border-gray-300 rounded" type="text" placeholder="Name"
                                   required/>
                            <input className="p-2 mb-2 border border-gray-300 rounded" type="email" placeholder="Email"
                                   required/>
                            <input className="p-2 mb-2 border border-gray-300 rounded" type="tel"
                                   placeholder="Phone Number"
                                   required/>
                            <label className="flex items-center mb-2 text-xs">
                                <input className="mr-2" type="checkbox" required/>
                                I authorize Diagnos Lab to contact me via phone calls, email, SMS or WhatsApp
                            </label>
                            <button className="bg-DiagnosRed text-white p-2 cursor-pointer rounded" type="submit">Send
                            </button>
                        </form>
                        <p className="mt-2">
                            Have a simple question? <a className="text-red-700 hover:underline" href="">Check out our
                            FAQ</a>
                        </p>
                    </div>
                    <div className="ml-6">
                        <img className="rounded-lg" src="./banner.png" height="300" width="700 " alt=""/>
                    </div>
                </section>
            </div>
            <div className="mx-auto px-4 py-4">
                <h2 className="text-xl">Top Wellness Packages</h2>
            </div>
            <section className="flex flex-wrap mx-auto justify-evenly p-5">
                {tests.map((test, index) => (
                    <TestCard
                        key={index}
                        name={test.name}
                        originalPrice={test.originalPrice}
                        discountedPrice={test.discountedPrice}
                        parameters={test.parameters}
                       />
                    ))}
            </section>
        </main>
    );
}
