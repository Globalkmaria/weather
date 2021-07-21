import React from 'react';
import ForecastItem from '../components/ForecastItem';

function ForecastItemContainer() {
  return (
    <div className="forecast__item">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </div>
  );
}

export default ForecastItemContainer;
