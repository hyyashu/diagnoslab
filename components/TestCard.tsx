import React from 'react';
import Image from "next/image";

export interface CardProps {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    parameters: number;
}

const TestCard: React.FC<CardProps> = ({
                                           name,
                                           originalPrice,
                                           discountedPrice,
                                           parameters}) => {
    return (
        <div className="max-w-xs rounded-lg bg-DiagnosRed text-white">
            {/*<Image*/}
            {/*    className="rounded-lg w-full h-48 object-cover"*/}
            {/*    src="https://www.pathkindlabs.com/assets/tests_images/2.png"*/}
            {/*    height="100"*/}
            {/*    width="100"*/}
            {/*    alt={name}*/}
            {/*/>*/}
            <div className="rounded-lg p-4 text-white">
                <h3 className="font-bold text-xl">{name}</h3>
                <h4 className="font-semibold">Parameters Covered:{parameters}</h4>
                <div className="flex flex-wrap items-center justify-evenly mb-4">
                    <p className="line-through text-sm">{`₹${originalPrice}`}</p>
                    <p className="font-bold text-2xl">{`₹${discountedPrice}`}</p>
                </div>
                <button className="bg-white p-2 w-full text-black rounded">Book Now</button>
                <a href={`/packages/${name}`}>More</a>
            </div>
        </div>
    );
};

export default TestCard;


{/*<ul className="list-disc list-inside">*/
}
{/*    {parameters.map((param, index) => (*/
}
{/*        <li key={index}>{param}</li>*/
}
{/*    ))}*/
}
{/*</ul>*/
}
{/*<h4 className="mt-4 font-semibold">FAQs:</h4>*/
}
{/*<ul className="list-disc list-inside">*/
}
{/*    {Object.entries(faqs).map(([question, answer], index) => (*/
}
{/*        <li key={index}>*/
}
{/*            <strong>{question}</strong>*/
}
{/*            <p>{answer}</p>*/
}
{/*        </li>*/
}
{/*    ))}*/
}
{/*</ul>*/
}
{/*<h4 className="mt-4 font-semibold">Tests Included:</h4>*/
}
{/*<ul className="list-disc list-inside">*/
}
{/*    {Object.entries(test_included).map(([test, description], index) => (*/
}
{/*        <li key={index}>*/
}
{/*            <strong>{test}</strong>*/
}
{/*            <p>{description}</p>*/}
{/*        </li>*/}
{/*    ))}*/}
{/*</ul>*/}