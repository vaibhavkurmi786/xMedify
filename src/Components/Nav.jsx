import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between py-2 px-10 bg-blue-50 shadow-md">
      <Link to="/" className="flex items-center justify-center gap-2 text-xl font-bold">
        <div className="bg-blue-400 text-white p-1 rounded">
          <IoShieldCheckmark className="text-sm" />
        </div>
        <span className="text-blue-400">
        Medify
        </span>
      </Link>
      <div className="flex items-center justify-center">
        <nav aria-label="Main navigation">
          <ul className="flex items-center space-x-12 text-sm">
            <li>
              <Link to="/search" className="hover:underline">
                Find Doctors
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hospitals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Medicines
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Surgeries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Software for Provider
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facilities
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => navigate('/my-bookings')}
          className="ml-12 bg-blue-400 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-600 transition-colors"
        >
          My Bookings
        </button>
      </div>
    </nav>
  );
};

export default Nav;
