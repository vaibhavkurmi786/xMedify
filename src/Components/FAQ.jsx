import React, { useState } from 'react';
import { FaPlus, FaMinus, FaSmile } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Why choose our medical for your family?',
      answer: 'We provide comprehensive healthcare services with experienced doctors, modern facilities, and patient-centered care. Our commitment to excellence ensures your family receives the best medical attention.',
    },
    {
      question: 'Why we are different from others?',
      answer: 'Our unique approach combines cutting-edge technology with compassionate care. We offer 24/7 support, personalized treatment plans, and a team of specialists dedicated to your wellbeing.',
    },
    {
      question: 'Trusted & experience senior care & love',
      answer: 'With over 20 years of experience, our senior care program is designed to provide dignity, comfort, and specialized medical attention for elderly patients.',
    },
    {
      question: 'How to get appointment for emergency cases?',
      answer: 'For emergency cases, call our 24/7 hotline or visit our emergency department directly. We prioritize urgent cases and ensure immediate medical attention.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Image and badge */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D" // <-- Replace with your image path
            alt="Doctor with patient"
            className="rounded-xl w-full max-w-md object-cover shadow-lg"
          />
          {/* Heart icon overlay */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 flex items-center justify-center border-4 border-white">
            <AiFillHeart className="text-pink-500 text-2xl" />
          </div>
          {/* Badge overlay */}
          <div className="absolute bottom-6 left-[-42px] bg-white rounded-lg shadow-lg flex items-center px-4 py-2 gap-2 border border-gray-100">
            <FaSmile className="text-yellow-400 text-2xl" />
            <div>
              <div className="font-bold text-lg text-gray-900">84k+</div>
              <div className="text-xs text-gray-500">Happy Patients</div>
            </div>
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="w-full md:w-1/2">
          <div className="text-left mb-2">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              Get Your Answer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-4 text-left bg-transparent hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <span className="ml-4 text-blue-400 text-xl">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pl-1 pb-4 pr-2 text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

