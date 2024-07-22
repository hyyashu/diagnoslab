'use client'
import "./globals.css";
import Image from 'next/image'
import TestCard, {CardProps} from '../sections/TestCard';
import {useEffect, useState} from "react";
import CallBackForm from "@/components/CallBackForm";


export default function Home() {
    const [tests,       setTests] = useState<CardProps[]>([]); // Use the imported interface

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./data.json');
            const data = await response.json();
            setTests(data.slice(0, 4)); // Limit items
            console.log(data);
        };
        fetchData();
    },[]);
    return (
        <main className="main">
            <div className="justify-around pt-2 pb-5 bg-gradient-to-r">
                <section className="flex justify-around items-start p-4 md:p-10 flex-wrap">
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
            <div className=" text-center pt-4">
                <h2 className="text-xl font-bold">Most Preferred Wellness Packages</h2>
            </div>
            <section className="flex flex-wrap p-4 md:p-8">
                {tests.map((test, index) => (
                   <div className=" p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
                    <TestCard
                        key={index}
                        name={test.name}
                        originalPrice={test.originalPrice}
                        discountedPrice={test.discountedPrice}
                        parameters={test.parameters}
                    />
                   </div>
                ))}
            </section>
        </main>
    );
}
