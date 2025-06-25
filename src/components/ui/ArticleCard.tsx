import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: {
    name: string;
    color: string;
  };
  tags?: Array<{
    name: string;
    color: string;
  }>;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  date,
  description,
  image,
  category,
  tags = []
}) => {
  return (
    <Link to={`/articles/${id}`} className="block h-full group">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top"
        />
        <div className="flex flex-col flex-1 p-6">
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className={`inline-block bg-${category.color}-100 text-${category.color}-800 px-3 py-1 text-xs rounded-full`}>
              {category.name}
            </span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`inline-block bg-${tag.color}-100 text-${tag.color}-800 px-3 py-1 text-xs rounded-full`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          <div className="mt-auto text-sm text-gray-500">{date}</div>
        </div>
      </div>
    </Link>
  );
};