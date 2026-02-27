import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getStates, getCities } from "../services/api";
import ServiceIcons from "./ServiceIcons";

const HeroSection = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const statesData = await getStates();
        setStates(statesData);
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          setLoading(true);
          const citiesData = await getCities(selectedState);
          setCities(citiesData);
          setSelectedCity(""); // Reset city when state changes
        } catch (error) {
          console.error("Failed to fetch cities:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setCities([]);
        setSelectedCity("");
      }
    };
    fetchCities();
  }, [selectedState]);

  const   handleSearch = () => {
    if (selectedState && selectedCity) {
      navigate(
        `/search?state=${encodeURIComponent(
          selectedState
        )}&city=${encodeURIComponent(selectedCity)}`
      );
    } else {
      alert("Please select both state and city");
    }
  };

  return (
    <div className="bg-blue-50 to-white py-2 px-2 sm:px-4 md:px-8 lg:px-0 w-full max-w-full">
      <div className="py-8 md:py-15 px-2 sm:px-6 md:px-10  mx-auto relative w-full max-w-full">
        <div className="w-full max-w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 z-10">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
              Skip the travel! Find Online
              <br />
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              Medical <span className="text-blue-400">Centers</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">
              Connect instantly with a 24x7 specialist or choose to <br /> video
              visit a particular doctor.
            </p>

            <button className="text-base sm:text-lg bg-blue-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-blue-600 transition-colors">
              Find Centers
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-start z-10 mt-6 lg:mt-0 max-w-full">
            <img src="/hero_image.png" alt="Doctors" className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full h-auto object-contain max-w-full" />
          </div>
        </div>
        {/* Search Card - absolutely positioned on large screens, static on small */}
        <div className="w-full max-w-full lg:absolute lg:inset-x-0 lg:bottom-0 px-0 sm:px-4 md:px-10 mt-6 lg:mt-0 z-20 bg-blue-50">
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-5 w-full max-w-full">
            <div className="flex flex-col md:flex-row gap-4 p-0 sm:p-5">
              <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-lg px-2 sm:px-4 py-2 sm:py-3" id="state">
                <FaMapMarkerAlt className="text-blue-400" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-sm sm:text-base"
                >
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-lg px-2 sm:px-4 py-2 sm:py-3" id="city">
                <FaSearch className="text-blue-400" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedState || loading}
                  className="flex-1 outline-none bg-transparent disabled:opacity-50 text-sm sm:text-base"
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <button
                id="searchBtn"
                onClick={handleSearch}
                className="w-full md:w-auto bg-blue-400 hover:bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                <FaSearch />
                Search
              </button>
            </div>
            <ServiceIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
