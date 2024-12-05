import React from "react";
import ftrImg1 from "../assets/ftrImg1.jpg";
import ftrImg2 from "../assets/ftrImg2.jpg";
import ax from "../assets/ax.png";
import gurantee from "../assets/gurrantee.png";
import fbicon from '../assets/icon-fb.png';
import inicon from '../assets/icon-linkedin.png';
import xicon from '../assets/icon-x.png';
import utubeicon from '../assets/icon-utube.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto p-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT <span className="text-red-500">▸</span></h3>
          <p className="text-sm mb-4">
            Tech House Having 100+ Quality Products and Innovations at national and international markets. Rated as Best Software House in Region.
          </p>
          <div className="">
            {/* <img src="https://via.placeholder.com/50" alt="PSEB" className="w-12 h-12" />
            <img src="https://via.placeholder.com/50" alt="Govt" className="w-12 h-12" />
            <img src="https://via.placeholder.com/50" alt="POSHA" className="w-12 h-12" /> */}
            <img src={ax} alt="" className="" />

          </div>
          <div className=" mt-4">
            {/* <img src="https://via.placeholder.com/50" alt="Google Reviews" className="w-12 h-12" />
            <img src="https://via.placeholder.com/50" alt="Guaranteed" className="w-12 h-12" /> */}
            <img src={gurantee} alt="" className="" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">RECENT POSTS <span className="text-red-500">▸</span></h3>
          <ul className="text-sm space-y-4">
            <li>
              <div className="flex items-start space-x-2">
                <img src={ftrImg1} alt="Post" className="w-10 h-10 rounded-full" />
                <div>
                  <p>16th Anniversary</p>
                  <span className="text-gray-400">February 4, 2024</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start space-x-2">
                <img src={ftrImg1} alt="Post" className="w-10 h-10 rounded-full" />
                <div>
                  <p>Presidential Awards Won by Eziline</p>
                  <span className="text-gray-400">February 20, 2023</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start space-x-2">
                <img src={ftrImg2} alt="Post" className="w-10 h-10 rounded-full" />
                <div>
                  <p>Eziline Exhibited at LEAP 2023 Saudi Arabia</p>
                  <span className="text-gray-400">February 7, 2023</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT <span className="text-red-500">▸</span></h3>
          <p className="text-sm mb-4">
            PK Office: 304-G, Amna Plaza Pesh Rd Rawalpindi <br />
            US Office: 16192 Coastal Highway Lewes, DE <br />
            UK Office: Intl. House, 776-778 Barking Rd London <br />
            FR Office: 5 avenue Pierre Salvi 95500 Gonesse Paris
          </p>
          <p className="text-sm">
            Ph: +92 51 5491184 / +92 51 8772888 <br />
            Email: info@eziline.com
          </p>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm flex-col-reverse lg:flex-row gap-8 p-8 lg:py-5">
          <p>© 2022 Copyright Eziline Software House</p>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Internships</a></li>
            <li><a href="#" className="hover:underline">Ezi Products</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Bank</a></li>
          </ul>
          {/* <div className="flex gap-4"> */}
          <div className="flex space-x-4 h-full justify-center items-center px-4">
            <a href="#" className="">
              <img className="h-4" src={fbicon} alt="fb" />
            </a>
            <a href="#" className="">
              <img className="h-4" src={inicon} alt="linkedin" />
            </a>
            <a href="#" className="">
              <img className="h-4" src={xicon} alt="linkedin" />
            </a>
            <a href="#" className="">
              <img className="h-4" src={utubeicon} alt="linkedin" />
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
