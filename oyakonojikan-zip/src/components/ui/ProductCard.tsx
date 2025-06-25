import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  tag?: {
    name: string;
    color: string;
  };
  onDetailClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  tag,
  onDetailClick
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        {tag && (
          <span className={`inline-block bg-${tag.color}-100 text-${tag.color}-800 px-3 py-1 text-xs rounded-full mb-2`}>
            {tag.name}
          </span>
        )}
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 font-bold mb-3">{price}</p>
        <button 
          onClick={onDetailClick}
          className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap"
        >
          商品詳細
        </button>
      </div>
    </div>
  );
};