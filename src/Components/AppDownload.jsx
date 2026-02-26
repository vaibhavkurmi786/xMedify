import React, { useState } from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import "../App.css";

const phoneMockup1 = "src/assets/SeekPng 1.png"; // Place your phone mockup images in assets
const phoneMockup2 = "src/assets/SeekPng 1.png";
const googlePlayIcon = "src/assets/google-play.png"; // Place your store icons in assets
const appStoreIcon = "src/assets/app-store.png";

const AppDownload = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex items-center justify-center bg-blue-200 py-10 overflow-hidden">
      {/* Left: Phone mockups */}
      <div className="relative  w-[320px] min-w-[320px] h-[300px]">
        <img
          src={phoneMockup2}
          alt="Phone 2"
          className="absolute left-20 top-0 w-[180px] z-10"
        />
        <img
          src={phoneMockup1}
          alt="Phone 1"
          className="absolute left-0 top-10 w-[220px] z-20"
        />
      </div>

      {/* Right: Download section */}
      <div className="relative ml-16 max-w-[480px]">
        <h2 className="text-[36px] font-bold text-[#1a3365] mb-2">
          Download the <br />
          <span className="text-[#3bbcf8]">Medify</span> App
        </h2>
        <img
          className="absolute top-[60px] left-[-50px]"
          src="src/assets/Vector.svg"
          alt=""
        />
        <div className="text-[#222] text-base mb-6">
          Get the link to download the app
        </div>
        <form className="flex gap-3 mb-8">
          <div className="flex">
            <input
              type="text"
              value={"+91"}
              className="w-12 bg-white text-center  py-3 text-base rounded-lg border border-[#e0e0e0]  focus:outline-none"
            />
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="input-no-spinner bg-white px-4 py-3 text-base rounded-lg border border-[#e0e0e0] w-[220px] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#3bbcf8] text-white rounded-lg px-6 text-base font-semibold cursor-pointer border-none"
          >
            Send SMS
          </button>
        </form>
        <div className="flex gap-6">
          <a href="#" className="flex items-center gap-3 px-5 py-4 rounded text-white text-2xl bg-gray-700"><IoLogoGooglePlaystore/> Google Play</a>
          <a href="#" className="flex items-center gap-3 px-5 py-4 rounded text-white text-2xl bg-gray-700">
            <FaApple/> App Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
