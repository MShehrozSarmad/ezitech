import React from "react";
import fbicon from '../assets/icon-fb.png';
import inicon from '../assets/icon-linkedin.png';
import xicon from '../assets/icon-x.png';
import utubeicon from '../assets/icon-utube.png';

const TopBar = () => {
    return (
        <>
            <div className=" border-t-[5px] border-[#00bcd4] hidden lg:flex justify-center items-center gap-5 bg-gray-100 px-4 text-sm h-12">
                <div className="flex items-center space-x-4">
                    <span>📍 Office 304-B Amna Plaza Near Radio Pakistan, Peshawar Road, Rawalpindi</span>
                    <span>📞 +923212225212</span>
                    <span>✉️ info@eziline.com</span>
                </div>
                <div className="flex space-x-4 border border-x-2 h-full justify-center items-center px-4">
                    <a href="#" className="hover:text-blue-500">
                        <img className="h-4 filter grayscale contrast-200 hover:filter-none" src={fbicon} alt="fb" />
                    </a>
                    <a href="#" className="hover:text-blue-500">
                        <img className="h-4 filter grayscale contrast-200 hover:filter-none" src={inicon} alt="linkedin" />
                    </a>
                    <a href="#" className="hover:text-blue-500">
                        <img className="h-4 filter grayscale contrast-200 hover:filter-none" src={xicon} alt="linkedin" />
                    </a>
                    <a href="#" className="hover:text-blue-500">
                        <img className="h-4 filter grayscale contrast-200 hover:filter-none" src={utubeicon} alt="linkedin" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default TopBar;
