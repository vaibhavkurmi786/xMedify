import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer";
import { getBookings, removeBooking } from "../utils/localStorage";
import {
  FaCalendarAlt,
  FaClock,
  FaHospital,
  FaTrash,
  FaMapMarkerAlt,
  FaSearch,
  FaThumbsUp
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import AppDownload from "../Components/AppDownload";
import { FaCircleCheck } from "react-icons/fa6";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const allBookings = getBookings();
    setBookings(allBookings);
  };

  // const handleCancelBooking = (id) => {
  //   if (window.confirm("Are you sure you want to cancel this booking?")) {
  //     try {
  //       removeBooking(id);
  //       loadBookings(); // Reload bookings
  //       alert("Booking cancelled successfully");
  //     } catch (error) {
  //       alert("Failed to cancel booking");
  //     }
  //   }
  // };
  console.log(bookings);

  return (
    <div className="min-h-screen bg-blue-50">
      <Heading />
      <Nav />
      <div className="relative bg-blue-400 py-4 px-10">
        <h1 className="text-3xl font-bold text-white mb-2" id="myBookingsHeading">My Bookings</h1>
        <div className="w-1/2 absolute right-0 top-0 px-10 py-8">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between gap-2">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder:text-gray-400 text-md outline-0"
              placeholder="Search By Hospital"
            />
            <button className="bg-blue-400 px-10 py-2 rounded-xl text-white flex items-center justify-start gap-2 text-md">
              <FaSearch /> Search
            </button>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-10 py-10 bg-blue-100">
        {/* No Bookings */}
        {bookings.length === 0 && (
          <div className="text-center py-20">
            <FaCalendarAlt className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No bookings yet
            </h2>
            <p className="text-gray-500 mb-6">
              Start by searching for medical centers and booking an appointment
            </p>
            <a
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Find Medical Centers
            </a>
          </div>
        )}

        {bookings.length > 0 && (
          <div className="flex gap-3">
            <div className="space-y-4 w-3/4">
              {[...bookings].reverse().map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex  md:flex-row gap-6">
                    {/* Left Side - Hospital Icon */}
                    <div className="shrink-0">
                      <div className="relative w-32 h-32 bg-blue-300 rounded-full flex items-center justify-center">
                        <img
                          className="w-1/2 h-auto"
                          src="/hopitalImg.png"
                          alt=""
                        />
                        <div className="absolute right-0 bottom-5 text-blue-500">
                          <FaCircleCheck />
                        </div>
                      </div>
                    </div>

                    {/* Middle - Booking Details */}
                    <div className="w-full ">
                      <div className="w-full flex justify-between px-2 py-1 gap-3 ">
                        <h3 className="text-xl font-bold text-blue-400 p-2" data-cy="booking-center-name">
                          {booking.center.name}
                        </h3>

                        <p className="font-medium border-2 w-fit h-fit p-2 rounded text-blue-400">
                          {booking.time}
                        </p>
                        <p className="font-medium border-2 w-fit h-fit p-2 rounded text-green-600">
                          {booking.dateFormatted}
                        </p>
                      </div>
                      <div className="w-full flex-col justify-between px-2  gap-3 ">
                        <h2 className="text-lg font-bold text-black p-2">
                          {booking.center.city},{booking.center.state}
                        </h2>
                        <p className="text-sm  text-black px-2">
                          Smilessence Center for Advanced Dentistry + 1 <br />{" "}
                          more
                        </p>
                        <hr />
                        <br />
                        <div className="w-fit flex items-center gap-1 bg-green-400 px-3 py-1 rounded">
                          <FaThumbsUp className="text-white text-sm" />
                          <span className="text-sm font-medium text-white">5
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Actions */}
                    {/* <div className="flex flex-col justify-center items-center md:items-end gap-3">
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        <FaTrash />
                        Cancel Booking
                      </button>
                      <p className="text-xs text-gray-500">
                        Booked on{" "}
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/4  h-fit">
              <img src="src/assets/sideBanner.png" alt="" />
            </div>
          </div>
        )}
      </div>
      <AppDownload />
      <Footer />
    </div>
  );
};

export default MyBookingsPage;
