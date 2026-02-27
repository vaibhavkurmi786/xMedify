import React from "react";
import { FaHospital, FaThumbsUp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const MedicalCenterCard = ({
  center,
  onBookAppointment,
  showBooking,
  bookingContent,
}) => {
  return (
    <div className="">
      <div
        className={` bg-white rounded-2xl shadow-md p-0 hover:shadow-lg transition-shadow border border-blue-100 ${showBooking ? "ring-2 ring-blue-200" : ""}`}
      >
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Left Side - Hospital Image/Icon */}
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

          {/* Middle - Hospital Details */}
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-blue-300">
              {center["Hospital Name"] || center.name}
            </h3>

            <div className="w-full flex items-start gap-2 text-gray-600">
              <div className="w-full">
                <p className="font-medium">
                  {center["City"] || center.city},{" "}
                  {center["State"] || center.state}
                </p>
                <p>
                  Smilessence Center for Advanced Dentistry +1 <br />
                  more
                </p>
                <div className="flex justify-between w-full ">
                  <div className="w-3/4 flex flex-col items-start gap-3">
                    <p className=" text-gray-500  text-md">
                      <span className="text-green-400 font-extrabold">
                        FREE
                      </span>{" "}
                      <span className="line-through">₹500</span> Consultation
                      fee at clinic
                    </p>
                    <div className="border-t-1 border-t-gray-300  w-full "></div>
                    <div>
                      {center["Hospital overall rating"] && (
                        <div className="flex items-center gap-1 bg-green-400 px-3 py-1 rounded">
                          <FaThumbsUp className="text-white text-sm" />
                          <span className="text-sm font-medium text-white">
                            {center["Hospital overall rating"]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col justify-center items-center md:items-center gap-3">
                    <span className="text-center text-green-400  text-md font-medium">
                      Available Today
                    </span>
                    <button
                      onClick={() => onBookAppointment(center)}
                      className="bg-blue-300 hover:bg-blue-600 text-white px-2 py-3 rounded-lg font-medium transition-colors w-full md:w-auto"
                      data-cy="book-center-visit"
                    >
                      Book FREE Center Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Render booking modal content inside the card if showBooking is true */}
        {showBooking && (
          <div className="border-t border-blue-100 bg-white rounded-b-2xl px-0 md:px-6 pt-6 pb-2 mt-0">
            {bookingContent}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default MedicalCenterCard;
