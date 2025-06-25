import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-primary">HOME</Link>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="w-4 h-4 flex items-center justify-center mx-1">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              {item.href ? (
                <Link to={item.href} className="hover:text-primary">{item.label}</Link>
              ) : (
                <span className="font-medium text-gray-800">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};