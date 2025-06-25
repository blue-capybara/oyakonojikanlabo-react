import React from 'react';

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
  isActive: boolean;
  onToggle: (id: string) => void;
}

export const FaqItem: React.FC<FaqItemProps> = ({
  id,
  question,
  answer,
  isActive,
  onToggle
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className={`faq-item ${isActive ? 'active' : ''}`}>
        <button 
          className="faq-question w-full flex justify-between items-center p-5 font-medium text-left"
          onClick={() => onToggle(id)}
        >
          <span>{question}</span>
          <div className="w-5 h-5 flex items-center justify-center ml-2 transition-transform">
            <i className={`${isActive ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
          </div>
        </button>
        <div className={`faq-answer px-5 pb-5 ${isActive ? 'max-h-96' : 'max-h-0'}`}>
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};