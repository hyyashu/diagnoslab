import "./globals.css";
import TestCard from "@/sections/TestCard";

export default function Home() {
  return (
      <main className="main">
      <div className="flex flex-wrap items-center justify-around pt-2 pb-5 bg-gradient-to-r">
        <section className="flex justify-around items-start p-8 bg-gradient-to-r from-white to-red-200 flex-wrap">
          <div className="p-5 rounded bg-white w-[300px]">
            <h2 className="text-red-700 mb-5 text-center">Request a CallBack</h2>
            <form className="flex flex-col">
              <input className="p-2 mb-2 border border-gray-300 rounded" type="text" placeholder="Name" required/>
              <input className="p-2 mb-2 border border-gray-300 rounded" type="email" placeholder="Email" required/>
              <input className="p-2 mb-2 border border-gray-300 rounded" type="tel" placeholder="Phone Number" required/>
              <label className="flex items-center mb-2 text-xs">
                <input className="mr-2" type="checkbox" required/>
                I authorize Diagnos Lab to contact me via phone calls, email, SMS or WhatsApp
              </label>
              <button className="bg-DiagnosRed text-white p-2 cursor-pointer rounded" type="submit">Send</button>
            </form>
            <p className="mt-2">
              Have a simple question? <a  className="text-red-700 hover:underline" href="" >Check out our FAQ</a>
            </p>
          </div>
          <div className="">
            <img className="rounded-lg" src="https://placehold.co/900x400"  alt=""/>
          </div>
        </section>
      </div>
        <TestCard/>
      </main>
  );
}
