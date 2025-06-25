import React, { useState } from 'react';

interface CalendarEvent {
  day: number;
  title: string;
}

interface EventCalendarProps {
  month: number;
  year: number;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
}

export const EventCalendar: React.FC<EventCalendarProps> = ({
  month,
  year,
  events,
  onEventClick
}) => {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);

  const monthNames = [
    '1月', '2月', '3月', '4月', '5月', '6月',
    '7月', '8月', '9月', '10月', '11月', '12月'
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const today = new Date();
    const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    const todayDate = isCurrentMonth ? today.getDate() : -1;
    
    const days = [];
    
    // Previous month days
    const prevMonthDays = getDaysInMonth(currentMonth === 0 ? currentYear - 1 : currentYear, currentMonth === 0 ? 11 : currentMonth - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar-day text-gray-400">
          {prevMonthDays - i}
        </div>
      );
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const hasEvent = events.some(event => event.day === i);
      const event = events.find(event => event.day === i);
      
      days.push(
        <div 
          key={`current-${i}`} 
          className={`calendar-day ${i === todayDate ? 'today' : ''} ${hasEvent ? 'event-day has-event' : ''}`}
          onClick={() => hasEvent && event && onEventClick(event)}
        >
          {i}
        </div>
      );
    }
    
    // Next month days
    const totalCells = 42; // 6 rows x 7 days
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar-day text-gray-400">
          {i}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
      <div className="flex justify-between items-center mb-6">
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
          onClick={prevMonth}
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <h3 className="text-xl font-bold">{currentYear}年 {monthNames[currentMonth]}</h3>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
          onClick={nextMonth}
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-4 text-center">
        <div className="text-sm font-medium text-gray-500">日</div>
        <div className="text-sm font-medium text-gray-500">月</div>
        <div className="text-sm font-medium text-gray-500">火</div>
        <div className="text-sm font-medium text-gray-500">水</div>
        <div className="text-sm font-medium text-gray-500">木</div>
        <div className="text-sm font-medium text-gray-500">金</div>
        <div className="text-sm font-medium text-gray-500">土</div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-6">
        {renderCalendar()}
      </div>
    </div>
  );
};