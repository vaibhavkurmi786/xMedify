import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MedicalSpecialists = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmad Khan",
      specialty: "Haircare",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300",
    },
    {
      id: 2,
      name: "Dr. Heena Sachdeva",
      specialty: "Eyecare",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300",
    },
    {
      id: 3,
      name: "Dr. Ankur Sharma",
      specialty: "Piscologist",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300",
    },
    {
      id: 4,
      name: "Dr. Ahmad Stevens",
      specialty: "Neurologist",
      image:
        "https://images.unsplash.com/photo-1642975967602-653d378f3b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Dr. Priya Desai",
      specialty: "Cardiologist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "Dr. Rajesh Gupta",
      specialty: "Orthopedist",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300",
    },
    {
      id: 7,
      name: "Dr. Sneha Patel",
      specialty: "Dermatologist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300",
    },
    {
      id: 8,
      name: "Dr. Vikram Singh",
      specialty: "ENT Specialist",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300",
    },
    {
      id: 9,
      name: "Dr. Meera Kapoor",
      specialty: "Pediatrician",
      image:
        "https://plus.unsplash.com/premium_photo-1681967035389-84aabd80cb1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 10,
      name: "Dr. Arjun Nair",
      specialty: "Gastroenterologist",
      image:
        "https://images.unsplash.com/photo-1637059824899-a441006a6875?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className=" bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Medical <span className="text-blue-400">Specialist</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="specialists-swiper"
          style={{
            paddingBottom: "40px",
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className=" rounded-lg overflow-hidden  cursor-pointer">
                {/* Doctor Image with curved bottom */}
                <div className="relative pb-8">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover object-top rounded-b-xl shadow-lg hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-8  "></div>
                </div>

                {/* Doctor Info */}
                <div className="p-4 text-center -mt-4 ">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 ">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">
                    {doctor.specialty}
                  </p>

                  {/* Rating */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MedicalSpecialists;
