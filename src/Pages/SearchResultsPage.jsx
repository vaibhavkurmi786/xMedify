import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer";
import MedicalCenterCard from "../Components/MedicalCenterCard";
import BookingModal from "../Components/BookingModal";
import { getMedicalCenters } from "../services/api";
import { FaHospital, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { getStates, getCities } from "../services/api";
import FAQ from "../Components/FAQ";
import AppDownload from "../Components/AppDownload";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const stateParam = searchParams.get("state");
  const cityParam = searchParams.get("city");
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [searching, setSearching] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(stateParam, "this is search param");
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
          if (!cityParam) {
            setSelectedCity("");
          }
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
  }, [selectedState, cityParam]);

  useEffect(() => {
    const fetchMedicalCenters = async () => {
      if (selectedState && selectedCity) {
        console.log(
          "pata nhi yaha kyu aa rha hai",
          selectedState,
          selectedCity,
        );
        setSearching(true);
        try {
          setLoading(true);
          const data = await getMedicalCenters(selectedState, selectedCity);
          setMedicalCenters(data);
        } catch (error) {
          console.error("Failed to fetch medical centers:", error);
        } finally {
          setLoading(false);
          setSearching(false);
        }
      } else {
        setMedicalCenters([]);
      }
    };
    fetchMedicalCenters();
  }, [selectedState, cityParam, selectedCity]);

  const handleBookAppointment = (center) => {
    setSelectedCenter(center);
  };

  const handleCloseModal = () => {
    setSelectedCenter(null);
  };

  useEffect(() => {
    if (stateParam && cityParam) {
      setSelectedState(stateParam);
      setSelectedCity(cityParam);
    }
  }, [stateParam, cityParam]);
  return (
    <div className="min-h-screen bg-blue-50">
      <Heading />
      <Nav />

      {/* Search Bar Section */}
      <div className="relative bg-blue-400 py-12">
        <div >
          <div className="absolute inset-x-0 top-0 px-10 py-8">
            <div className="bg-white rounded-lg shadow-lg p-5">
              <div className="flex flex-col md:flex-row gap-4 p-5">
                <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3" id="state">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedCity("");
                    }}
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
                  onClick={() => {
                    if (selectedState && selectedCity) {
                      setSearching(true);
                      navigate(
                        `/search?state=${selectedState}&city=${selectedCity}`,
                      );
                    }
                  }}
                  className="w-full md:w-auto bg-blue-400 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-28 ">
        {/* Search Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {selectedState && selectedCity
              ? `${medicalCenters.length} medical centers available in ${selectedCity.toLowerCase()}`
              : "Find medical centers by selecting state and city"}
          </h1>
          <p className="text-gray-600">
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>

        {/* Loader when searching or loading */}
        {(searching || loading) && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* No state/city selected */}
        {!selectedState || !selectedCity ? (
          <div className="text-center py-20">
            <FaHospital className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No state or city selected
            </h2>
            <p className="text-gray-500">
              Please select a state and city to view medical centers.
            </p>
          </div>
        ) : null}

        {/* No Results */}
        {selectedState &&
          selectedCity &&
          !loading &&
          medicalCenters.length === 0 && (
            <div className="text-center py-20">
              <FaHospital className="text-6xl text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No medical centers found
              </h2>
              <p className="text-gray-500">
                Try searching for a different location
              </p>
            </div>
          )}

        {/* Medical Centers List */}
        {selectedState &&
          selectedCity &&
          !loading &&
          medicalCenters.length > 0 && (
            <div className="flex w-full gap-3">
              <div className="space-y-4 w-3/4">
                {medicalCenters.map((center, index) => {
                  const isSelected =
                    selectedCenter &&
                    (selectedCenter["Hospital Name"] || selectedCenter.name) ===
                      (center["Hospital Name"] || center.name);
                  return (
                    <div>
                      <MedicalCenterCard
                        key={index}
                        center={center}
                        onBookAppointment={handleBookAppointment}
                        showBooking={isSelected}
                        bookingContent={
                          isSelected ? (
                            <BookingModal
                              center={center}
                              onClose={handleCloseModal}
                            />
                          ) : null
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-1/4  h-fit">
                <img src="src/assets/sideBanner.png" alt="" />
              </div>
            </div>
          )}
      </div>
      <FAQ />
      <AppDownload />
      <Footer />
      {/* Booking Modal now rendered inline below the selected card */}
    </div>
  );
};

export default SearchResultsPage;
