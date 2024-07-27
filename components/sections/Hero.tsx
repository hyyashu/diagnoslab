import Image from "next/image";
import React from "react";
import CallbackForm from "../CallbackForm";

export default function Hero() {
  return (
    <section className="flex justify-around p-4 md:p-10 flex-wrap bg-gradient-to-r">
      <div className="">
        <Image
          src="/800x300px.png"
          width={800}
          height={300}
          alt="hero_banner"
          className=" border-[3px] rounded border-DiagnosRed md:block"
        />
      </div>
      <div className="p-1 w-[300px] rounded">
        <CallbackForm />
      </div>
    </section>
  );
}
