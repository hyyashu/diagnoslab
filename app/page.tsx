import Image from "next/image";
import "./globals.css";
import React from "react";

export default function Home() {
  return (
      <main className="flex flex-wrap items-center justify-around pt-2 pb-5 bg-gradient-to-r">
        <section className="flex flex-wrap justify-around items-start ">
          <div className="p-5 rounded bg-white w-[300px]">
            <h2>Request a CallBack</h2>
            <form className="flex flex-col">
              <input type="text" placeholder="Name" required/>
              <input type="email" placeholder="Email" required/>
              <input type="tel" placeholder="Phone Number" required/>
              <label>
                <input type="checkbox" required/>
                I authorize Diagnos Lab to contact me via phone calls, email, SMS or WhatsApp
              </label>
              <button type="submit">Send</button>
            </form>
            <p>
              Have a simple question? <a href="#faq-section">Check out our FAQ</a>
            </p>
          </div>
          <div className="rounded w-[900px]">
            <img src="https://placehold.co/900x400" height="900" width="400" alt=""/>
          </div>
        </section>
      </main>
  );
}
