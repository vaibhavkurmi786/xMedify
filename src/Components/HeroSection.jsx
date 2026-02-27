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
    <div className="bg-blue-50 to-white py-2 px">
      <div className="py-15 px-10">
        <div className="w-full flex items-start justify-between ">
          {/* Left Content */}
          <div className=" space-y-6">
            <p className=" md:text-4xl font-medium  text-gray-900 leading-tight">
              Skip the travel! Find Online
              <br />
            </p>
            <h1 className=" text-6xl font-extrabold">
              Medical <span className="text-blue-400">Centers</span>
            </h1>
            <p className="text-gray-600 text-2xl">
              Connect instantly with a 24x7 specialist or choose to <br /> video
              visit a particular doctor.
            </p>

            <button className="text-lg bg-blue-400 text-white px-8 py-3 rounded-md  hover:bg-blue-600 transition-colors">
              Find Centers
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-1/2  flex justify-end items-start">
            <img src="/hero_image.png" alt="Doctors" className="" />
          </div>
          <div className="absolute inset-x-0 top-full px-10 py-8">
            <div className=" bg-white rounded-lg shadow-lg p-5 ">
              <div className="flex flex-col md:flex-row gap-4 p-5">
                <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3" id="state">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="flex-1 outline-none bg-transparent"
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3" id="city">
                  <FaSearch className="text-blue-400" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedState || loading}
                    className="flex-1 outline-none bg-transparent disabled:opacity-50"
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
                  className="w-full md:w-auto bg-blue-400 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
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
    </div>
  );
};

export default HeroSection;
