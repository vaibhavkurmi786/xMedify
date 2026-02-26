import React from 'react';
import { FaUser, FaCalendar } from 'react-icons/fa';

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
      category: 'Medical',
      date: 'March 31, 2022',
      author: 'Rebecca Lee',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      description: 'Learn how to maintain your mental wellbeing during illness with these expert tips.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400',
      category: 'Medical',
      date: 'March 31, 2022',
      author: 'Rebecca Lee',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      description: 'Discover effective strategies for managing stress and anxiety during recovery.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400',
      category: 'Medical',
      date: 'March 31, 2022',
      author: 'Rebecca Lee',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      description: 'Expert advice on maintaining emotional balance while dealing with health issues.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
            Blog & News
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl text-blue-900 font-bold text-center mb-12">
          Read Our Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              {/* Image */}
              <div className=" overflow-hidden rounded-b-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300  "
                />
                  
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    {article.category}
                    &nbsp;
                    |
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                <div className="text-gray-600 text-sm line-clamp-2 flex items-center gap-4">
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <img src="https://images.unsplash.com/photo-1662837775286-7e6258c7c595?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" alt="doctor" />
                    </div>
                    <span className='text-blue-900 font-bold'>{article.author}</span>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

