import React from 'react';

const CallbackForm = () => {
    return (
        <div className="p-5 rounded bg-white w-[300px]">
            <h2 className="text-red-700 mb-5 text-center">Request a Callback</h2>
            <form className="flex flex-col">
                <input className="p-2 mb-2 border border-gray-300 rounded" type="text" placeholder="Name"
                       required/>
                {/*<input className="p-2 mb-2 border border-gray-300 rounded" type="email" placeholder="Email"*/}
                {/*       required/>*/}
                <input className="p-2 mb-2 border border-gray-300 rounded" type="tel"
                       placeholder="Phone Number"
                       required/>
                {/*<label className="flex items-center mb-2 text-xs">*/}
                {/*    <input className="mr-2" type="checkbox" required/>*/}
                {/*    I authorize Diagnos Lab to contact me via phone calls, email, SMS or WhatsApp*/}
                {/*</label>*/}
                <button className="bg-DiagnosRed text-white p-2 cursor-pointer rounded" type="submit">Send
                </button>
            </form>
            <p className="mt-2">
                Have a simple question? <a className="text-red-700 hover:underline" href="">Check out our
                FAQ</a>
            </p>
        </div>
    );
};

export default CallbackForm;
