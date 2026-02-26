import React from 'react';

const ServiceIcons = () => {
  const services = [
    {
      icon: '/src/assets/Doctor.png',
      label: 'Doctors',
    },
    {
      icon: '/src/assets/Drugstore.png',
      label: 'Labs',
    },
    {
      icon: '/src/assets/Hospital.png',
      label: 'Hospital',
    },
    {
      icon: '/src/assets/Capsule.png',
      label: 'Medical Store',
    },
    {
      icon: '/src/assets/Ambulance.png',
      label: 'Ambulance',
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between gap-8 md:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-40 h-auto rounded-lg flex flex-col items-center justify-center gap-3 bg-blue-50 cursor-pointer hover:scale-110 transition-transform"
            >
              <div className="w-20 h-20 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.label}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <span className="text-sm md:text-base text-gray-700 font-medium">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceIcons;

