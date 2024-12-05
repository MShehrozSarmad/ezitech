import React from "react";
import mac from "../assets/mac.png"

const ProjectManagement = () => {
    return (
        <div className="bg-white py-10 px-5">
            <div className="max-w-7xl mx-auto flex flex-col justify-center lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">

                <div className="flex items-center justify-center">
                    <img
                        src={mac}
                        alt="Project Management Dashboard"
                        className="max-w-[500px] max-[1022px]:max-w-[80%]"
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-5 px-2">
                    <h2 className="text-3xl font-bold text-gray-800">
                        OUR PROJECT MANAGEMENT
                    </h2>

                    <hr className="border-cyan-500 w-1/3 ml-3" />

                    <ul className="text-gray-600 text-lg space-y-3">
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">★</span>
                            Project and Milestone tracking
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">★</span>
                            Task management with SMS/email notification
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">★</span>
                            24/7 online service & support
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">★</span>
                            Billing/invoicing transparent management
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">★</span>
                            Discussion board for project management
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">★</span>
                            HR/Payroll & complete office management
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">★</span>
                            Cloud-based & robust technology
                        </li>
                    </ul>

                    <div className="flex space-x-5">
                        <button className="px-6 py-2 font-semibold text-red-500 border border-red-500 hover:bg-red-500 hover:text-white rounded-md transition-all duration-300">
                            STAFF
                        </button>
                        <button className="px-6 py-2 font-semibold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-300">
                            INTERN
                        </button>
                        <button className="px-6 py-2 font-semibold text-green-500 border border-green-500 hover:bg-green-500 hover:text-white rounded-md transition-all duration-300">
                            CLIENT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
