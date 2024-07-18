import React from 'react';

const Nav = () => {
    return (
        <>
            <header className="flex flex-wrap content-center bg-[#e53935] h-[2.875em] fixed left-0 right-0 top-0 w-full z-5 text-white">
                    <div className="flex flex-wrap pr-4 pl-4 mr-auto ml-auto justify-start">
                            <ul className="flex flex-wrap justify-center pl-4 z-[99]">
                                <li className="">
                                    <a className="mr-3 ml-3 text-white" href="/">Home</a>
                                </li>
                                <li className="">
                                    <a className="mr-3 ml-3 text-white" href="/">Tests</a>
                                </li>
                                <li className="">
                                    <a className="mr-3 ml-3 text-white" href="/">Packages</a>
                                </li>
                                <li className="">
                                    <a className="mr-3 ml-3 text-white" href="/">Blogs</a>
                                </li>
                            </ul>
                    </div>
                    <div className="flex flex-wrap pr-4 pl-4 mr-auto ml-auto justify-end">
                        <a className="pl-4">Get a Callback</a>
                        <a className="pl-4">Contact Us</a>

                    </div>
            </header>
        </>
    );
};

export default Nav;
