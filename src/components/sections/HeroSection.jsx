import Image from "next/image";
import React from "react";
import CallbackForm from "../CallbackForm";

export default function HeroSection() {
  return (
    <section className="flex justify-around p-4 md:p-10 flex-wrap bg-gradient-to-l to-primary from-red-200">
      <div className="p-2">
        <Image
          src="/800x300px.png"
          width={800}
          height={300}
          alt="hero_banner"
          className="rounded md:block"
        />
      </div>
      <div className="p-2  rounded">
        <CallbackForm />
      </div>
    </section>
  );
}
