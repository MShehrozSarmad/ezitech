import React, { useState } from "react";
import '../styles/navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white sticky top-0 z-10 max-w-full overflow-hidden">
            <div className="container mx-auto flex justify-between items-center lg:flex-col xl:flex-row  px-4 py-3">
                <div className="">
                    <img src="https://www.eziline.com/wp-content/uploads/thegem-logos/logo_fe92a3b7f6bded0dfdeb1eb69773154f_1x.png"
                        alt="logo" />
                </div>
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
                <ul
                    className={`lg:flex lg:items-center lg:space-x-5 ${isMenuOpen ? "block" : "hidden"
                        } transition-all duration-300 ease-in-out absolute lg:static bg-gray-800 w-full lg:w-auto left-0 top-full lg:top-auto`}
                >
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">HOME</a></li>

                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            PORTFOLIO
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            EZI UPDATES
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            SOFTWARES
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            LOGIN
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            CONTACT
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="custom-button flex items-center justify-center bg-cover bg-center text-white text-lg font-bold h-[50px] w-[200px] p-2 rounded-[15px] hover:!bg-transparent"
                            style={{
                                backgroundImage: `url("https://www.eziline.com/wp-content/uploads/71dd02f49176464168ee8120e90b1bed-1.png")`
                            }}
                        >
                            16TH ANNIVERSARY
                        </a>

                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
