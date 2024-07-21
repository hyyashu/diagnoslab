import React from 'react';

export interface CardProps {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    parameters: string[];
}

const TestCard: React.FC<CardProps> = ({
                                           name,
                                           originalPrice,
                                           discountedPrice,
                                           parameters}) => {
    return (
        <div className="max-w-[220px] rounded-lg bg-DiagnosRed text-white">
            <img className="rounded-lg" src="https://www.pathkindlabs.com/assets/tests_images/2.png" alt={name}/>
            <div className="max-w-[220px] rounded-lg bg-DiagnosRed p-5 text-white">
            <h3 className="font-bold">{name}</h3>
            <h4 className="mt-4 font-semibold">Parameters Covered:</h4>
            <div className="flex flex-wrap justify-between">
                <p className="line-through text-xs">₹{originalPrice}</p>
                <p className="font-bold text-xl">₹{discountedPrice}</p>
            </div>
            <button className="bg-white p-2 text-black rounded mt-2">Book Now</button>
            {/*<ul className="list-disc list-inside">*/}
            {/*    {parameters.map((param, index) => (*/}
            {/*        <li key={index}>{param}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*<h4 className="mt-4 font-semibold">FAQs:</h4>*/}
            {/*<ul className="list-disc list-inside">*/}
            {/*    {Object.entries(faqs).map(([question, answer], index) => (*/}
            {/*        <li key={index}>*/}
            {/*            <strong>{question}</strong>*/}
            {/*            <p>{answer}</p>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*<h4 className="mt-4 font-semibold">Tests Included:</h4>*/}
            {/*<ul className="list-disc list-inside">*/}
            {/*    {Object.entries(test_included).map(([test, description], index) => (*/}
            {/*        <li key={index}>*/}
            {/*            <strong>{test}</strong>*/}
            {/*            <p>{description}</p>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            </div>
        </div>
    );
};

export default TestCard;
