import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GiWindsock } from 'react-icons/gi';
import { BiCloudLightRain } from 'react-icons/bi';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
function Today() {
  return (
    <div className="today">
      <div className="today__main">
        <h2 className="today__city">Seoul</h2>
        <div className="today__current">
          <span className="today__curTemp">33°C</span>
          <span className="today__condition">Sunny</span>
        </div>
      </div>
      <div className="today__detail">
        <div className="today__detail-item">
          <div className="item-box">
            <BsArrowDown />
            <span>22°C</span>
          </div>
          <div className="item-box">
            <BsArrowUp />
            <span>35°C</span>
          </div>
        </div>
        <div className="today__detail-item">
          <div className="item-box">
            <FiSun />
            <span>05:00</span>
          </div>
          <div className="item-box">
            <FiMoon />
            <span>20:00</span>
          </div>
        </div>
        <div className="today__detail-item">
          <div className="item-box">
            <GiWindsock />
            <span>1.00</span>
          </div>
          <div className="item-box">
            <BiCloudLightRain /> <span>0.60</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
