/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

export default function DropDown({ onClickMonth, onClickYear, years }) {
  const [yeardrop, setYearDrop] = useState(false);
  const [monthdrop, setMonthDrop] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const [months] = useState([
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
    "December"
  ]);

  const yearsArray = [...new Set(years.map(item => item.slice(0,4)))]

  const [availableDates] = useState(yearsArray.map(item => ({
    year: item,
    months: [...new Set(years.map(yea => yea.includes(item) && Math.ceil(Number(yea.slice(5)))).filter(state => state))].sort()
  })))
  const [currentMonths, setCurrentMonths] = useState(availableDates.filter(item => item.year === String(new Date().getFullYear()))[0].months)

  const [yearAnim, setYearAnim] = useState(true);
  const [monthAim, setMonthAnim] = useState(true)
  
  const yearHandler = async (item) => {
    setYear(item);
    setMonth("");
    setCurrentMonths(availableDates.filter(currentDates => currentDates.year === String(item))[0].months)
    setYearDrop(false);
    onClickYear({
      startDate: `${item}-01-01`,
      endDate: `${Number(item) + 1}-01-01`
    });
  };

  const monthHandler = async (item) => {
    setMonth(item);
    setMonthDrop(false);
    const currmonth = String(months.indexOf(item) + 1).padStart(2, 0);
    onClickMonth({
      startDate: `${year}-${currmonth}-01`,
      endDate: `${
        Number(currmonth) === 12
          ? `${Number(year) + 1}-01-01`
          : `${year}-${String(Number(currmonth) + 1).padStart(2, 0)}-01`
      }`
    });
  };
  return (
    <div
      className="glimpses-dropdown"
      style={{ height: monthdrop ? `${33*Number(currentMonths.length) >= 120 ? 33*Number(currentMonths.length)*1.3 : 120}px` : `${33*Number(yearsArray.length) >= 120 ? 33*Number(yearsArray.length)*1.3 : 120}px`}}
    >
      <div className="dropdown-container">
        <div className="dropdown-year">
          <div className="dropdown show">
            <div>
              <div
                className="year-dropdown"
                onClick={() => {
                  setTimeout(() => {
                    setYearDrop(!yeardrop);
                    setTimeout(() => {
                      setYearAnim(!yearAnim);
                    },200)
                  },100)}}
              >
                {year || "YEAR"}
                <span>
                  <img
                    src="https://global-s3.s3.us-west-2.amazonaws.com/Vector_4_05e3c59684.png"
                    alt=""
                  />
                </span>
              </div>
              <div
                className="dropdown-menu dropdown-menu-right drop-in"
                style={{ display: yeardrop ? "block" : "none" }}
                onMouseLeave={() =>{
                   setTimeout(() => {
                    setYearDrop(false);
                    setTimeout(() => {
                      setYearAnim(!yearAnim);
                    },200)
                  },100)}}
              >
                <div
                  className="dropdown-item"
                  style={{ pointerEvents: "none" }}
                >
                  1
                </div>
                {availableDates.map((item) => (
                  <div
                    className={`dropdown-item ${yearAnim && 'drop-anim'}`}
                    onClick={() => yearHandler(item.year)}
                  >
                    {item.year}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown-month">
          <div className="dropdown show">
            <div>
              <div
                className="month-dropdown"
                onClick={() => {
                  setTimeout(() => {
                    setMonthDrop(!monthdrop)
                    setTimeout(() => {
                      setMonthAnim(!monthAim)
                    },200)
                  },100)}}
              >
                {month || "MONTH"}
                <span>
                  <img
                    src="https://global-s3.s3.us-west-2.amazonaws.com/Vector_4_05e3c59684.png"
                    alt=""
                  />
                </span>
              </div>
              <div
                className="dropdown-menu dropdown-menu-right drop-in"
                style={{ display: monthdrop ? "block" : "none" }}
                onMouseLeave={() =>{
                   setTimeout(() => {
                    setMonthDrop(false);
                    setTimeout(() => {
                      setMonthAnim(!monthAim)
                    },200)
                  },100)}}
              >
                <div
                  className="dropdown-item"
                  style={{ pointerEvents: "none" }}
                >
                  month
                </div>
                {currentMonths.map((item) => (
                  <div
                    className={`dropdown-item ${monthAim && 'drop-anim'}`}
                    onClick={() => monthHandler(months[item-1])}
                  >
                    {months[item-1]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
