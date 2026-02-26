import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OffersCarousel = () => {
  const offers = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
      title: 'Free Checkup',
      discount: '50% OFF',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400',
      title: 'Health Packages',
      discount: '30% OFF',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Lab Tests',
      discount: '40% OFF',
    },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1631217871099-88310a909a32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Dental Care',
    discount: '35% OFF',
  },
  {
    id: 5,
    image: 'https://plus.unsplash.com/premium_photo-1661779396815-56fe1ca9877c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvciUyMHBhdGllbnR8ZW58MHx8MHx8fDA%3D',
    title: 'Eye Examination',
    discount: '45% OFF',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1581056771392-8a90ddb76831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvciUyMHBhdGllbnR8ZW58MHx8MHx8fDA%3D',
    title: 'Physical Therapy',
    discount: '25% OFF',
  },
  {
    id: 7,
    image: 'https://media.istockphoto.com/id/1782848258/photo/teenager-at-a-medical-appointment.webp?a=1&b=1&s=612x612&w=0&k=20&c=6Um68yBr9SvLXG8j2hcukS1fqOPVK3ivLMU2IJHCwCU=',
    title: 'Vaccination Package',
    discount: '20% OFF',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRvY3RvciUyMHBhdGllbnR8ZW58MHx8MHx8fDA%3D',
    title: 'Wellness Consultation',
    discount: '55% OFF',
  },
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="offers-swiper"
          style={{
            paddingBottom: '40px',
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">
                    {offer.title}
                  </h3>
                  <p className="text-yellow-400 text-lg font-semibold">
                    {offer.discount}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OffersCarousel;

