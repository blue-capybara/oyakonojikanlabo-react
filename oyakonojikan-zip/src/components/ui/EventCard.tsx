import React from 'react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  prefecture: string;
  description: string;
  image: string;
  categories: Array<{
    name: string;
    color: string;
  }>;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  location,
  prefecture,
  description,
  image,
  categories
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-[3/2] w-full">
            <img 
              src={image} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((category, index) => (
              <span 
                key={index} 
                className={`inline-block bg-${category.color}-100 text-${category.color}-800 px-3 py-1 text-xs rounded-full`}
              >
                {category.name}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-calendar-line"></i>
            </div>
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-map-pin-line"></i>
            </div>
            <span>{prefecture} | {location}</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link 
            to={`/events/${id}`} 
            className="inline-block bg-primary text-white px-6 py-2 rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors"
          >
            詳細を見る
          </Link>
        </div>
      </div>
    </div>
  );
};