import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GiWindsock } from 'react-icons/gi';
import { BiCloudLightRain } from 'react-icons/bi';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

function Today({
  cityname,
  cur_temp,
  weater_string,
  min,
  max,
  rise,
  set,
  wind_speed,
  rain_amount,
}) {
  return (
    <div className="today">
      <div className="today__main">
        <h2 className="today__city">{cityname}</h2>
        <div className="today__current">
          <span className="today__curTemp">{cur_temp}°C</span>
          <span className="today__condition">{weater_string}</span>
        </div>
      </div>
      <div className="today__detail">
        <div className="today__detail-item">
          <div className="item-box">
            <BsArrowDown />
            <span>{Math.floor(min)}°C</span>
          </div>
          <div className="item-box">
            <BsArrowUp />
            <span>{Math.floor(max)}°C</span>
          </div>
        </div>
        <div className="today__detail-item">
          <div className="item-box">
            <FiSun />
            <span>{rise}</span>
          </div>
          <div className="item-box">
            <FiMoon />
            <span>{set}</span>
          </div>
        </div>
        <div className="today__detail-item">
          <div className="item-box">
            <GiWindsock />
            <span>{wind_speed}</span>
          </div>
          <div className="item-box">
            <BiCloudLightRain /> <span>{rain_amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Today);
