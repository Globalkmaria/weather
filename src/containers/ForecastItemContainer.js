import React, { useMemo } from 'react';
import ForecastItem from '../components/ForecastItem';
import { getmaxNmix } from '../utils/date';

function ForecastItemContainer({ dailyData, yesterdayData }) {
  const [max, min] = useMemo(() => getmaxNmix(yesterdayData.data.hourly), [
    yesterdayData.data.hourly,
  ]);
  const weather = yesterdayData.data.current.weather[0].main;
  const iconId = yesterdayData.data.current.weather[0].icon;
  return (
    <div className="forecast__item">
      <ForecastItem
        day="Yesterday"
        max={max}
        min={min}
        weather={weather}
        iconId={iconId}
      />
      <ForecastItem day="Tomorrow" data={dailyData[1]} />
      <ForecastItem data={dailyData[2]} />
      <ForecastItem data={dailyData[3]} />
      <ForecastItem data={dailyData[4]} />
      <ForecastItem data={dailyData[5]} />
      <ForecastItem data={dailyData[6]} />
      <ForecastItem data={dailyData[7]} />
    </div>
  );
}

export default React.memo(ForecastItemContainer);
