'use client'
import "./globals.css";
import useFetch from "@/hooks/useFetch"
import Image from 'next/image'
import TestCard from '@/components/TestCard';
import CallbackForm from "@/components/CallbackForm";
import WhyUs from "@/components/sections/WhyUs";
import { Key } from "react";


export default function Home() {
    const {data, loading, error} = useFetch('/data.json');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    const packageData = data.slice(0, 4);
    if (!packageData) return <p>Package was not found</p>;


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
                    <CallbackForm/>
                </section>
            </div>
            <div className="text-center pt-4">
                <h2 className="text-xl font-bold">Most Preferred Wellness Packages</h2>
            </div>
            <section className="flex flex-wrap p-4 md:p-8">
                {packageData.map((test: {
                    name: string;
                    originalPrice: number;
                    discountedPrice: number;
                    parameters: number[];
                }, index: Key | null | undefined) => (
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
            <section>
                <WhyUs/>
            </section>
        </main>
    );
}
