import React, { useMemo } from 'react';
import Today from '../components/Today';
import { getTime } from '../utils/date';
function TodayContainer({ currentData, dailyData, cityname }) {
  const { sunrise, sunset, wind_speed, weather, rain } = currentData;
  const cur_temp = Math.floor(currentData.temp);
  const weater_string = weather[0].main;
  const { temp } = dailyData[0];
  const { max, min } = temp;
  const rain_amount = rain ? rain['1h'] : '0.00';
  const rise = useMemo(() => getTime(sunrise), [sunrise]);
  const set = useMemo(() => getTime(sunset), [sunset]);
  return (
    <>
      <Today
        cityname={cityname}
        cur_temp={cur_temp}
        weater_string={weater_string}
        min={min}
        max={max}
        rise={rise}
        set={set}
        wind_speed={wind_speed}
        rain_amount={rain_amount}
      />
    </>
  );
}

export default React.memo(TodayContainer);
