import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaTimes, FaCalendarAlt, FaClock } from "react-icons/fa";
import { saveBooking } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ center, onClose }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);

  // Time slots available
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
  ];

  // Helper to group time slots
  const getTimeGroups = (slots) => {
    const morning = [];
    const afternoon = [];
    const evening = [];
    slots.forEach((time) => {
      const [h, m, period] = time.match(/(\d+):(\d+) (AM|PM)/).slice(1);
      const hour = (parseInt(h, 10) % 12) + (period === "PM" ? 12 : 0);
      if (hour < 12) morning.push(time);
      else if (hour >= 12 && hour < 17) afternoon.push(time);
      else if (hour >= 18 && hour <= 21) evening.push(time);
    });
    return { morning, afternoon, evening };
  };
  const { morning, afternoon, evening } = getTimeGroups(timeSlots);

  // Helper to check if a time slot is in the past for the selected date
  const isPastTimeSlot = (date, time) => {
    if (!date) return false;
    const now = new Date();
    const slotDate = new Date(date);
    const [h, m, period] = time.match(/(\d+):(\d+) (AM|PM)/).slice(1);
    let hour = parseInt(h, 10);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    slotDate.setHours(hour, parseInt(m, 10), 0, 0);
    // Only disable if selected date is today
    if (date.toDateString() === now.toDateString()) {
      return slotDate < now;
    }
    return false;
  };

  // Generate next 7 days
  useEffect(() => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    setAvailableDates(dates);
    setSelectedDate(dates[0]); // Select today by default
  }, []);

  const formatDate = (date) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatDateForDisplay = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isTomorrow = (date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return date.toDateString() === tomorrow.toDateString();
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time");
      return;
    }

    const booking = {
      center: {
        name: center["Hospital Name"] || center.name,
        city: center["City"] || center.city,
        state: center["State"] || center.state,
        address: center["Address"] || center.address,
        type: center["Hospital Type"] || center.type,
      },
      date: selectedDate.toISOString(),
      time: selectedTime,
      dateFormatted: formatDateForDisplay(selectedDate),
    };

    try {
      saveBooking(booking);
      alert("Appointment booked successfully!");
      onClose();
      // Optionally navigate to My Bookings page
      // navigate('/my-bookings');
    } catch (error) {
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="bg-white">
      {/* Date/Time Selection Section */}
      <div className="flex flex-col gap-6 p-6">
        {/* Date Swiper */}
        <div>
          {/* <div className="flex items-center gap-2 mb-4">
            <FaCalendarAlt className="text-blue-500 text-xl" />
            <h3 className="text-lg font-semibold text-gray-900">Select Date</h3>
          </div> */}
          <Swiper
            spaceBetween={12}
            slidesPerView={3}
            navigation={false}
            style={{ paddingBottom: "1rem" }}
          >
            {availableDates.map((date, index) => {
              // Count available slots for this date
              const allSlots = [...morning, ...afternoon, ...evening];
              const availableSlots = allSlots.filter(
                (time) => !isPastTimeSlot(date, time),
              ).length;
              return (
                <SwiperSlide key={index}>
                  <button
                    onClick={() => setSelectedDate(date)}
                    className={`w-full p-3   transition-all border-b-4 ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? "border-b-blue-400 bg-white"
                        : "border-b-gray-200 hover:border-b-blue-300"
                    }`}
                  >
                    <div className="text-center ">
                      <div className="flex gap-3 items-center justify-center">
                        <div className="text-md font-medium text-gray-600">
                          {isToday(date)
                            ? "Today"
                            : isTomorrow(date)
                              ? "Tomorrow"
                              : formatDate(date).split(",")[0]}
                        </div>
                        {/* Only show date and month if not today or tomorrow */}
                        {!isToday(date) && !isTomorrow(date) && (
                          <>
                            <div className="text-md font-bold text-gray-900">
                              {date.getDate()}
                            </div>
                            <div className="text-md text-gray-500">
                              {date.toLocaleDateString("en-US", { month: "short" })}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="text-xs text-green-600 mt-1 font-semibold">
                        {availableSlots} Slots Available
                      </div>
                    </div>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Time Slot Selection by Group */}
        <div>
          {/* <div className="flex items-center gap-2 mb-4">
            <FaClock className="text-blue-500 text-xl" />
            <h3 className="text-lg font-semibold text-gray-900">Select Time Slot</h3>
          </div> */}
          {/* Morning */}
          {morning.length > 0 && (
            <div className="mb-2">
              <div className="font-semibold text-gray-700 mb-1">Morning</div>
              <div className="flex flex-wrap gap-2">
                {morning.map((time, idx) => {
                  const disabled = isPastTimeSlot(selectedDate, time);
                  return (
                    <button
                      key={time}
                      onClick={() => !disabled && setSelectedTime(time)}
                      disabled={disabled}
                      className={`p-2 rounded-lg border-2 transition-all text-sm font-medium min-w-[90px] ${
                        selectedTime === time
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-blue-300 text-gray-700"
                      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {/* Afternoon */}
          {afternoon.length > 0 && (
            <div className="mb-2">
              <div className="font-semibold text-gray-700 mb-1">Afternoon</div>
              <div className="flex flex-wrap gap-2">
                {afternoon.map((time, idx) => {
                  const disabled = isPastTimeSlot(selectedDate, time);
                  return (
                    <button
                      key={time}
                      onClick={() => !disabled && setSelectedTime(time)}
                      disabled={disabled}
                      className={`p-2 rounded-lg border-2 transition-all text-sm font-medium min-w-[90px] ${
                        selectedTime === time
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-blue-300 text-gray-700"
                      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {/* Evening */}
          {evening.length > 0 && (
            <div className="mb-2">
              <div className="font-semibold text-gray-700 mb-1">Evening</div>
              <div className="flex flex-wrap gap-2">
                {evening.map((time, idx) => {
                  const disabled = isPastTimeSlot(selectedDate, time);
                  return (
                    <button
                      key={time}
                      onClick={() => !disabled && setSelectedTime(time)}
                      disabled={disabled}
                      className={`p-2 rounded-lg border-2 transition-all text-sm font-medium min-w-[90px] ${
                        selectedTime === time
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-blue-300 text-gray-700"
                      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Appointment Summary and Actions */}
      <div className="px-6 pb-4">
        {selectedDate && selectedTime && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-blue-900 mb-2">
              Appointment Summary
            </h4>
            <p className="text-blue-800">
              <span className="font-medium">Date:</span>{" "}
              {formatDateForDisplay(selectedDate)}
            </p>
            <p className="text-blue-800">
              <span className="font-medium">Time:</span> {selectedTime}
            </p>
          </div>
        )}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
