import React from "react";
import bg from "../assets/bg2.jpg";
import mobile from "../assets/mobile.png";
import webdev from "../assets/webdev.png";
import webdev2 from "../assets/webdev2.png";
import mobiledev from "../assets/mobiledev.png";
import cloud from "../assets/cloud.png";
import digital from "../assets/digital.png";
import startup from "../assets/startup.png";




const ServicesComponent = () => {
    const servicesLeft = [
        {
            title: "WEBSITE DEVELOPMENT",
            description:
                "Developing a website is fun and anyone can do this but very few understand how to build websites.",
            icon: webdev2,
        },
        {
            title: "WEB APP DEVELOPMENT",
            description:
                "Web applications have been changing the ways of business operates across the globe.",
            icon: webdev,
        },
        {
            title: "MOBILE APP DEVELOPMENT",
            description:
                "In this modern era, businesses should not ignore to have a business mobile app.",
            icon: mobiledev,
        },
    ];

    const servicesRight = [
        {
            title: "CLOUD SERVICES",
            description:
                "Modernize your workflow and improve your application's performance by migrating to the Cloud.",
            icon: cloud,
        },
        {
            title: "DIGITAL MARKETING",
            description:
                "Are you looking for ways to make your pitch inspirational to social media audience?",
            icon: digital,
        },
        {
            title: "STARTUP SOLUTIONS",
            description:
                "We help entrepreneurs turn their vision into reality and guide them throughout their business life cycle.",
            icon: startup,
        },
    ];

    return (
        <div
            className="bg-gray-100 bg-cover bg-center py-24 px-4 text-white"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            {/* Desktop View */}
            <div className="hidden lg:flex items-center justify-between gap-8">
                {/* Left Side */}
                <div className="flex flex-col gap-8 w-1/3 items-end">
                    {servicesLeft.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-16 text-right max-w-xs"
                        >
                            {/* Text */}
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-200">{service.description}</p>
                            </div>
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className=""
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Central Image */}
                <div className="w-1/3 max-w-[362px]">
                    <img
                        src={mobile}
                        alt="Central Display"
                        className="mx-auto"
                    />
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-8 w-1/3">
                    {servicesRight.map((service, index) => (
                        <div key={index} className="flex items-center gap-16 max-w-xs">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className=""
                                />
                            </div>
                            {/* Text */}
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-200">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden flex flex-col gap-8">
                {servicesLeft.concat(servicesRight).map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 max-w-sm mx-auto"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <img
                                src={service.icon}
                                alt={service.title}
                            />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-200">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesComponent;
