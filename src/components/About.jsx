import React from "react";
import laptop from '../assets/slider_frame.png';

const About = () => {
    return (
        <div
            className="text-white bg-cover bg-center bg-no-repeat py-20 lg:min-h-[97vh] bg-gray-800 max-[1022px]:!bg-none "
            style={{
                backgroundImage: "url('https://www.eziline.com/wp-content/uploads/bottom1.jpg?id=34527')",
            }}
        >
            <div className="maxw-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full flex justify-evenly items-center max-[1022px]:flex-col gap-10">
                    <div className="lg:max-w-[40%]">
                        <h2 className="text-4xl font-bold tracking-wide mb-8">
                            <span>ABOUT</span>
                            <span style={{ padding: '0 20px' }}>
                                <span style={{ color: "#27ffe3" }}>E</span>
                                <span style={{ color: "#4ecfb9" }}>Z</span>
                                <span style={{ color: "#00cde7" }}>I</span>
                                <span style={{ color: "#5393ff" }}>L</span>
                                <span style={{ color: "#0084bf" }}>I</span>
                                <span style={{ color: "#0084bf" }}>N</span>
                                <span style={{ color: "#0084bf" }}>E</span>
                            </span>

                        </h2>
                        <ul className="text-lg space-y-4">
                            <li className="flex items-start space-x-2">
                                <span className="text-red-500 font-bold">★</span>
                                <span>Eziline is an independent Pakistan-based company</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-red-500 font-bold">★</span>
                                <span>Operating since 2007 – Eziline has been in profit since the beginning</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-red-500 font-bold">★</span>
                                <span>
                                    We are website specialists (web design / dynamic web solution / graphics design /
                                    multimedia development)
                                </span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-red-500 font-bold">★</span>
                                <span>A close-knit team of 350+ designers</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-red-500 font-bold">★</span>
                                <span>Programmers</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-red-500 font-bold">★</span>
                                <span>System analysts and marketing executives</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 bg-center bg-cover max-[1022px]:!bg-none"
                        style={{
                            backgroundImage: `url(${laptop})`,
                            width: "532px",
                            height: "314px",
                        }}>
                        <iframe className="p-5" style={{
                            position: 'relative',
                            top: '-20px',
                            right: '-25px'
                        }} width="440" height="289" data-tgpli-src="https://www.youtube.com/embed/PTqcbyRa9mU?autoplay=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" data-tgpli-inited="" id="tgpli-67496939757ca" allowFullScreen="" src="https://www.youtube.com/embed/PTqcbyRa9mU?autoplay=0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
