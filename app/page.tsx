'use client'
import "./globals.css";
import Image from 'next/image'
import TestCard, {CardProps} from '../sections/TestCard';
import {useEffect, useState} from "react";
import CallBackForm from "@/components/CallBackForm"; // Import the interface


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
            <div className="  justify-around pt-2 pb-5 bg-gradient-to-r">
                <section className="flex justify-around items-start p-10 flex-wrap">
                    <Image
                        src="/banner.png"
                        width={500}
                        height={300}
                        alt="hero_banner"
                        className="rounded-lg"
                    />
                    <CallBackForm/>
                </section>
            </div>
            <div className="mx-auto px-16 py-4">
                <h2 className="text-xl font-bold">Top Wellness Packages</h2>
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
