import React from 'react';
import Link from "next/link";

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
        <div className="rounded-lg bg-DiagnosRed text-white">
            <img
                className="rounded-lg w-full h-48 object-cover"
                src="https://www.pathkindlabs.com/assets/tests_images/2.png"
                height="100"
                width="100"
                alt={name}
            />
            <div className="rounded-lg p-4 text-white">
                <div>
                <h3 className="font-bold text-l">{name}</h3>
                <h4 className="">Parameters: {parameters}</h4>
                </div>
                <div className="flex flex-wrap justify-evenly items-center mb-1">
                    <div className="flex flex-wrap w-[50%] items-center">
                    <p className="line-through text-sm">{`₹${originalPrice}`}</p>
                    <p className="font-bold text-2xl tex">{`₹${discountedPrice}`}</p>
                    </div>
                    <Link href={`/packages/${name}`} className="items-center">
                        <button className="bg-white p-2 text-DiagnosRed font-semibold rounded">Book Now</button>
                    </Link>
                </div>
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