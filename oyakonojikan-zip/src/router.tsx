import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { ArticleDetail } from './pages/ArticleDetail';
import { Pico } from './pages/Pico';
import { ProductDetail } from './pages/ProductDetail';
import { CompanyProfile } from './pages/CompanyProfile';
import { YogaCourse } from './pages/YogaCourse';
import { CultureSchool } from './pages/CultureSchool';
import { PicoTop } from './pages/PicoTop';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/pico" element={<PicoTop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/company" element={<CompanyProfile />} />
        <Route path="/culture/yoga" element={<YogaCourse />} />
        <Route path="/culture" element={<CultureSchool />} />
      </Routes>
    </BrowserRouter>
  );
};