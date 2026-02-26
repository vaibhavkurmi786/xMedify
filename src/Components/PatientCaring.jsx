import React from 'react';
import { FaCheckCircle, FaHandHoldingHeart, FaUserMd } from 'react-icons/fa';
import { VscVerifiedFilled } from "react-icons/vsc";
const PatientCaring = () => {
  const features = [
    'Stay Updated About Your Health',
    'Check Your Results Online',
    'Manage Your Appointments',
  ];

  return (
    <div className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative flex flex-col items-center">
            {/* Top Image */}
            <div className="relative z-20 ml-12">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400"
                alt="Patient care"
                className="rounded-lg shadow-lg w-[320px] h-[200px] object-cover border-4 border-white"
              />
              {/* Floating Card */}
              <div className="absolute -left-36 top-8 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 min-w-[200px]">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <FaUserMd className="text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-blue-900 text-sm">Free Consultation</div>
                  <div className="text-gray-500 text-xs">Consultation with the best</div>
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative -mt-8 -ml-32 z-30">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400"
                alt="Medical consultation"
                className="rounded-lg shadow-lg w-[260px] h-[170px] object-cover border-4 border-white"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="">
            <div className="inline-block">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className='text-blue-900'>Patient</span> <span className="text-blue-400">Caring</span>
            </h2>
            
            <p className="text-gray-600 text-md leading-relaxed py-5">
              Our goal is to deliver quality of care in a courteous, respectful, and 
              compassionate manner. We hope you will allow us to care for you and strive 
              to be the first and best choice for healthcare.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <VscVerifiedFilled className="text-blue-400 text-xl shrink-0" />
                  <span className="text-blue-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;

