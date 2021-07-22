import React from 'react';
import ForecastItemContainer from './ForecastItemContainer';

function ForecastContainer({ dailyData, yesterdayData }) {
  return (
    <div className="forecast">
      <ForecastItemContainer
        dailyData={dailyData}
        yesterdayData={yesterdayData}
      />
    </div>
  );
}

export default React.memo(ForecastContainer);
