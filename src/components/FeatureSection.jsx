import React from "react";
import price from "../assets/price.png";
import work from "../assets/work.png";
import delivery from "../assets/deelivery.png";

const FeaturesSection = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-gray-50">

            <div className="bg-purple-500 text-white flex-1 p-16 text-center">
                <div className="flex justify-center mb-16">
                    <img
                        src={price}
                        alt="Flexible Price Icon"
                        className="h-20"
                    />
                </div>
                <h3 className="text-2xl font-bold mb-2">FLEXIBLE PRICE</h3>
                <p className="text-xl font-light">Our pricing plan is created by our clients. Market Competitive.</p>
            </div>

            <div className="bg-cyan-500 text-white flex-1 p-16 text-center">
                <div className="flex justify-center mb-16">
                    <img
                        src={work}
                        alt="Quality Work Icon"
                        className="h-20"
                    />
                </div>
                <h3 className="text-2xl font-bold mb-2">QUALITY WORK</h3>
                <p className="text-xl font-light">Quality assurance & testing before every project delivery.</p>
            </div>

            <div className="bg-teal-500 text-white flex-1 p-16 text-center">
                <div className="flex justify-center mb-16">
                    <img
                        src={delivery}
                        alt="Quick Delivery Icon"
                        className="h-20"
                    />
                </div>
                <h3 className="text-2xl font-bold mb-2">QUICK DELIVERY</h3>
                <p className="text-xl font-light">40 days initial delivery on custom mega projects.</p>
            </div>
        </div>
    );
};

export default FeaturesSection;
