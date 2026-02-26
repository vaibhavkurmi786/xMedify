import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaChevronRight,
} from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="space-y-20">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className=" bg-blue-400 p-1 rounded">
                <IoShieldCheckmark />
              </div>
              <span className="text-blue-400">Medify</span>
            </div>
            <div className="flex gap-3 ">
              <a
                href="#"
                className="w-10 h-10 bg-white text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Our Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Our Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Orthology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Neurology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Dental Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Opthalmology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Cardiology
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Our Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Our Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaChevronRight className="text-xs" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-blue-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-blue-200 text-sm text-left">
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
