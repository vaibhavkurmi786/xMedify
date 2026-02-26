import React from 'react';
import { FaHospital, FaUserMd, FaUsers, FaAward, FaHospitalAlt } from 'react-icons/fa';
import { FaHandHoldingHeart, FaUserDoctor } from 'react-icons/fa6';

const Statistics = () => {
  const stats = [
    {
      icon: <FaHandHoldingHeart />,
      count: '5000+',
      label: 'Happy Patients',
      color: 'bg-blue-100 text-blue-400',
    },
    {
      icon: <FaHospital />,
      count: '200+',
      label: 'Hospitals',
      color: 'bg-red-100 text-red-400',
    },
    {
      icon: <FaHospitalAlt />,
      count: '1000+',
      label: 'Laboratories',
      color: 'bg-yellow-100 text-yellow-400',
    },
    {
      icon: <FaUserDoctor />,
      count: '700+',
      label: 'Expert Doctors',
      color: 'bg-green-100 text-green-400',
    },
  ];

  return (
    <div className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-6">
            <div className="inline-block">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
              </span>
            </div>
            
            <h2 className="text-blue-900 text-3xl md:text-4xl font-bold leading-tight">
              Our Families
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed">
              We will work with you to develop individualised care plans, including 
              management of chronic diseases. If we cannot assist, we can provide 
              referrals or advice about the type of practitioner you require. We treat 
              all enquiries sensitively and in the strictest confidence.
            </p>
          </div>

          {/* Right Side - Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.count}
                </h3>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

