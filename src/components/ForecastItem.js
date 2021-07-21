import React from 'react';

function ForecastItem() {
  return (
    <div className="forcast-item">
      <h3 className="forcast-item__day">Yesterday</h3>
      <span className="forcast-item__detailItem">22°C / 35°C</span>
      <div className="forcast-item__footer">
        <span className="forcast-item__condition">Sunny</span>
        <span className="forcast-item__icon">i</span>
      </div>
    </div>
  );
}

export default ForecastItem;
