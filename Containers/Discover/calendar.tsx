import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface ICalendarProps {
  date?: Date;
}

const Calendar = ({ date = new Date() }: ICalendarProps) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedDate, setSelectedDate] = useState<Date>(date);

  const handlePrevMonth = () => {
    const prevMonth = new Date(selectedDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setSelectedDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(selectedDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setSelectedDate(nextMonth);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  //   console.log(getDaysInMonth(2023, 1));

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  //   console.log(getFirstDayOfMonth(2023, 1));

  const renderMonthYearHeader = () => {
    const month = months[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    const day = days[selectedDate.getDay()];

    return (
      <div className="w-full flex justify-between p-2 px-4 rounded-xl bg-primary text-text_dark border-theme">
        <button onClick={handlePrevMonth}>
          <MdOutlineArrowBackIos />
        </button>
        <h2>{`${day} ${month}, ${year}`}</h2>
        <button onClick={handleNextMonth}>
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    );
  };

  const renderDaysOfWeekHeader = () => {
    return (
      <div className="w-full flex justify-between items-center my-4">
        {days.map((day) => (
          <div key={day} className="calendar-cell">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDaysOfMonth = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const numDaysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const numCells = Math.ceil((numDaysInMonth + firstDayOfMonth) / 7) * 7;
    const cells = [];
    console.log(numCells);

    for (let i = 0; i < numCells; i++) {
      const dayOfMonth = i - firstDayOfMonth + 1;
      const date = new Date(year, month, dayOfMonth);
      const isCurrentMonth =
        i >= firstDayOfMonth && i < firstDayOfMonth + numDaysInMonth;

      cells.push(
        <div
          key={date.toString()}
          className={`text-sm full-theme p-4 rounded-xl shadow-sm w-6 h-6 flex justify-center items-center cursor-pointer ${
            isCurrentMonth ? "current-month" : ""
          } ${
            date.toDateString() === selectedDate.toDateString()
              ? "bg-primary text-text_dark dark:bg-primary dark:text-text_dark"
              : ""
          }`}
          onClick={() => setSelectedDate(date)}
        >
          {dayOfMonth > 0 && dayOfMonth <= numDaysInMonth ? dayOfMonth : null}
        </div>
      );
    }

    return (
      <div className="w-full grid grid-cols-7 gap-x-[12%] gap-y-3 text-center">
        {cells}
      </div>
    );
  };

  return (
    <div className="relative section">
      {renderMonthYearHeader()}
      {renderDaysOfWeekHeader()}
      {renderDaysOfMonth()}
    </div>
  );
};
export default Calendar;
