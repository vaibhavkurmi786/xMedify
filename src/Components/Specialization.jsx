import React from 'react';
import { FaStethoscope, FaHeartbeat, FaBrain, FaTooth, FaEye, FaBone, FaLungs, FaSyringe, FaHospital, FaHospitalAlt, FaHospitalSymbol } from 'react-icons/fa';
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { PiTestTubeDuotone } from "react-icons/pi";
import { BiShieldPlus } from "react-icons/bi";
const Specialization = () => {
  const specializations = [
    { icon: <FaHospital />, name: 'Dentistry' },
    { icon: <FaStethoscope />, name: 'Primary Care' },
    { icon: <FaHeartbeat />, name: 'Cardiology' },
    { icon: <TbDeviceHeartMonitor />, name: 'MRI Resonance' },
    { icon: <PiTestTubeDuotone />, name: 'Blood Test' },
    { icon: <BiShieldPlus />, name: 'Psychology' },
    { icon: <FaLungs />, name: 'Laboratory' },
    { icon: <FaSyringe />, name: 'X-Ray' },
  ];

  return (
    <div className="bg-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Find By <span className="text-blue-400">Specialisation</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className={` w-20 h-20 rounded-full flex items-center justify-center text-4xl text-blue-400 group-hover:scale-110 transition-transform`}>
                {spec.icon}
              </div>
              <span className="text-sm md:text-base text-gray-700 font-medium text-center">
                {spec.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-400 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specialization;

