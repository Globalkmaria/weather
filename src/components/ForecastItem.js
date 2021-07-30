import React from 'react';
import { getWeekday } from '../utils/date';
import Icon from './Icon';

function ForecastItem({ day, max, min, weather, iconId, data }) {
  const f_day = day ? day : getWeekday(data.dt);
  const f_max = max ? max : Math.floor(data.temp.max);
  const f_min = min ? min : Math.floor(data.temp.min);
  const f_weather = weather ? weather : data.weather[0].main;
  const f_iconId = iconId ? iconId : data.weather[0].icon;

  return (
    <div className="forcast-item">
      <h3 className="forcast-item__day">{f_day}</h3>
      <span className="forcast-item__detailItem">
        {f_max}°C / {f_min}°C
      </span>
      <div className="forcast-item__footer">
        <span className="forcast-item__condition">{f_weather}</span>
        <span className="forcast-item__icon">
          <Icon iconId={f_iconId} />
        </span>
      </div>
    </div>
  );
}

export default ForecastItem;
